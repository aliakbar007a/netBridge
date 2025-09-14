import { config } from "./config/env";
import { createHttpServer } from "./http/httpServer";
import { createTcpServer } from "./tcp/tcpServer";
import { logger } from "./utils/logger";

function bootstrap() {
  createTcpServer(config.TCP_PORT, config.TCP_HOST);
  createHttpServer(config.HTTP_PORT, config.TCP_HOST, config.TCP_PORT);

  logger.info(`App started: HTTP:${config.HTTP_PORT}, TCP:${config.TCP_PORT}`);
}

bootstrap();