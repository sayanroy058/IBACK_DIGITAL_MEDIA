import handler from "./server.js";

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
