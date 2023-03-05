import "reflect-metadata";

import express from "express";

import "../typeorm/index";

import { connect, createMessageReceiver } from "../../microservice/rabbitmq";

import { routes } from "./routes";

async function start() {
  const server = express();

  await connect("amqp://localhost:5672");

  const messageReceiver = createMessageReceiver("purchases");

  messageReceiver.receive((message) => {
    console.log(message);
  });

  server.use(express.json());
  server.use(routes);

  server.listen(4000, () => console.log("Server Admin is running!"));
}

start();
