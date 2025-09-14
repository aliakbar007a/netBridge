import { logger } from "../utils/logger";

export function handleTcpMessage(message: string): string {
  logger.info(`Received from TCP client:, ${message}`);
  return `ACK: ${message}`;
}