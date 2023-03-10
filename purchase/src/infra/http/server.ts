import { connect } from "../microservice/rabbitmq";

import { app } from "./app";

import approvedPurchase from "./useCases/purchases/approvedPurchase";

async function bootstrap() {
  await connect("amqp://localhost:5672");

  approvedPurchase();

  app.listen(3333, () => console.log("Purchase service is Running!"));
}

bootstrap();
