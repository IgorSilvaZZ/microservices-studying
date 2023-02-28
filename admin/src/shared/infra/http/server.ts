import "reflect-metadata";

import express from "express";
import "../typeorm/index";

import { routes } from "./routes";
import { connect } from "../rabbitmq";

import { PurchasesWorker } from "../rabbitmq/workers/PurchasesWorker";

const server = express();

connect();

const purchasesWorker = new PurchasesWorker();

purchasesWorker.consume("purchases");

server.use(express.json());
server.use(routes);

server.listen(4000, () => console.log("Server Admin is running!"));
