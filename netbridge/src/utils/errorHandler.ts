import { Request, Response, NextFunction } from "express";
import { logger } from "./logger";

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  logger.error(`Error:,${ err.message }`);
  res.status(500).json({ error: "Internal Server Error" });
}