import express from "express";

import { routes } from "./routes/index.";

import { connect } from "../rabbitmq/index";

const app = express();

connect();

app.use(express.json());
app.use(routes);

export { app };
