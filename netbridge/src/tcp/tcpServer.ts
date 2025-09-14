import net from "net";
import { handleTcpMessage } from "./tcpService";
import { logger } from "../utils/logger";

export function createTcpServer(port: number, host: string) {
  const server = net.createServer((socket) => {
   logger.info("TCP client connected");

    socket.on("data", (data) => {
      const response = handleTcpMessage(data.toString());
      socket.write(response);
    });

    socket.on("end", () => {
     logger.info("TCP client disconnected");
    });
  });

  server.listen(port, host, () => {
   logger.info(`TCP server running on tcp://${host}:${port}`);
  });
}