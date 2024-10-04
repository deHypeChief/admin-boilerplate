import { Elysia } from "elysia";
import pc from "picocolors"
import { connectDb } from "./config/db.config";
import admin from "./routes/admin/plugin";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { allowedOrigins } from "./config/origin.config";


connectDb()
export const app = new Elysia({
  prefix: '/api'
});

app
  .use(swagger())
  .use(
    cors({
      origin: allowedOrigins
    })
  )
  .use(admin)
  .get("/", () => "Server is Up and running 🦊")
  .listen(Bun.env.PORT || 3002);

console.log(`🦊 Elysia is running at ` + pc.yellow(`${app.server?.hostname}:${app.server?.port}`));