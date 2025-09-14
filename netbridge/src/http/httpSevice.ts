import { sendToTcp } from "../tcp/tcpClient";

export async function sendHttpMessage(message: string, tcpHost: string, tcpPort: number) {
  return await sendToTcp(message, tcpHost, tcpPort);
}