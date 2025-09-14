export const config = {
  TCP_PORT: Number(process.env.TCP_PORT) || 4000,
  HTTP_PORT: Number(process.env.HTTP_PORT) || 3000,
  TCP_HOST: process.env.TCP_HOST || "127.0.0.1",
};