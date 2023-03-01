import { connect } from "../microservice/rabbitmq";
import { app } from "./app";

async function bootstrap() {
  await connect("amqp://localhost:5672");

  app.listen(3333, () => console.log("Purchase service is Running!"));
}

bootstrap();
