import "reflect-metadata";

import express from "express";
import "../typeorm/index";

import { routes } from "./routes";

const server = express();

server.use(express.json());
server.use(routes);

server.listen(4000, () => console.log("Server Admin is running!"));
