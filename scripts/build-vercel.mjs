/**
 * Post-build script that converts the Vite SSR output (dist/) into
 * Vercel's Build Output API format (.vercel/output/).
 *
 * dist/client/  → .vercel/output/static/
 * dist/server/  → .vercel/output/functions/index.func/
 */

import {
  copyFileSync,
  mkdirSync,
  readdirSync,
  statSync,
  writeFileSync,
  rmSync,
  existsSync,
} from "node:fs";
import { join } from "node:path";

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Clean previous output
if (existsSync(".vercel/output")) {
  rmSync(".vercel/output", { recursive: true });
}

// 1. Static files
console.log("Copying static assets…");
copyDir("dist/client", ".vercel/output/static");

// 2. Server files
console.log("Copying server bundle…");
const funcDir = ".vercel/output/functions/index.func";
mkdirSync(funcDir, { recursive: true });
copyDir("dist/server", funcDir);

// 3. Serverless function entry — adapts the Web fetch handler to Node req/res
writeFileSync(
  join(funcDir, "entry.mjs"),
  `import handler from "./server.js";

export default async function vercelHandler(req, res) {
  const proto = req.headers["x-forwarded-proto"] || "https";
  const host  = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const url   = new URL(req.url, proto + "://" + host);

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v != null) headers.append(k, Array.isArray(v) ? v.join(", ") : v);
  }

  let body;
  if (req.method !== "GET" && req.method !== "HEAD") {
    body = await new Promise((resolve) => {
      const chunks = [];
      req.on("data", (c) => chunks.push(c));
      req.on("end", () => resolve(Buffer.concat(chunks)));
    });
  }

  const request  = new Request(url.toString(), { method: req.method, headers, body });
  const response = await handler.fetch(request, {}, {});

  res.statusCode = response.status;
  response.headers.forEach((v, k) => res.setHeader(k, v));
  res.end(Buffer.from(await response.arrayBuffer()));
}
`
);

// 4. Function config
writeFileSync(
  join(funcDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "entry.mjs",
      launcherType: "Nodejs",
    },
    null,
    2
  )
);

// 5. Vercel output config — serve static files first, fallback to SSR function
writeFileSync(
  ".vercel/output/config.json",
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/" },
      ],
    },
    null,
    2
  )
);

console.log("✓ .vercel/output structure created");
