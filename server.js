import { createRequestHandler } from "@remix-run/express";
import express from "express";
import { connectToDatabase } from "./db.js";

async function startServer() {
  try {
    await connectToDatabase();
    console.log("✅ MongoDB connected successfully");

    const viteDevServer = await import("vite").then((vite) =>
      vite.createServer({
        server: {
          middlewareMode: true,
          port: 5173,
        },
      })
    );

    const app = express();
    app.use(viteDevServer.middlewares);

    const build = () =>
      viteDevServer.ssrLoadModule("virtual:remix/server-build");
    app.all("*", createRequestHandler({ build }));

    app.listen(5173, () => {
      console.log("🚀 Server listening on http://localhost:5173");
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  console.log("Shutting down server...");
  try {
    const { client } = await import("./db.js");
    if (client) {
      await client.close();
      console.log("MongoDB connection closed.");
    }
  } catch (error) {
    console.error("Error during shutdown:", error);
  }
  process.exit(0);
});

startServer();
