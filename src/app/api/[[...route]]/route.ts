import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");
app.get("/project/:projectId", (c) => {
  const id = c.req.param("projectId");
  return c.json({ id: id });
});

export const GET = handle(app);
