import { Express } from "express";
import { handleReply } from "./httpController";

export function registerRoutes(app: Express, tcpHost: string, tcpPort: number) {
  app.post("/reply", (req, res, next) => handleReply(req, res, next, tcpHost, tcpPort));
}