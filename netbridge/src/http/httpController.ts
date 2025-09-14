import { Request, Response, NextFunction } from "express";
import { sendHttpMessage } from "./httpSevice";

export async function handleReply(
  req: Request,
  res: Response,
  next: NextFunction,
  tcpHost: string,
  tcpPort: number
) {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await sendHttpMessage(message, tcpHost, tcpPort);
    res.json({ response });
  } catch (err) {
    next(err);
  } 
}