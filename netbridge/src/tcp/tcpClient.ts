import net from "net";
import { logger } from "../utils/logger";

export function sendToTcp(message: string, host: string, port: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();

    client.connect(port, host, () => {
      client.write(message);
    });

    client.on("data", (data) => {
      resolve(data.toString());
      client.destroy();
    });

    client.on("error", (err) => {
      reject(err);
    });

    client.on("close", () => {
      logger.info("TCP connection closed");
    });
  });
}