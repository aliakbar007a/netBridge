import express from "express";
import { registerRoutes } from "./routes";
import { errorMiddleware } from "../utils/errorHandler";
import { logger } from "../utils/logger";

export function createHttpServer(port: number, tcpHost: string, tcpPort: number) {
  const app = express();
  app.use(express.json());

  registerRoutes(app, tcpHost, tcpPort);

  app.use(errorMiddleware);

  app.listen(port, () => {
   logger.info(`HTTP server running ot http://localhost:${port}`);
  });
}