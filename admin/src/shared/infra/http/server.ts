import "reflect-metadata";

import express from "express";

import "../typeorm/index";

import { connect } from "../../microservice/rabbitmq";

import createPurchase from "../../../modules/purchases/useCases/createPurchase";

import { routes } from "./routes";

async function start() {
  const server = express();

  await connect("amqp://localhost:5672");

  createPurchase();

  server.use(express.json());
  server.use(routes);

  server.listen(4000, () => console.log("Server Admin is running!"));
}

start();
