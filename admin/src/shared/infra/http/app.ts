import Fastify from "fastify";
import "reflect-metadata";

const app = Fastify({
  logger: true,
});

export { app };
