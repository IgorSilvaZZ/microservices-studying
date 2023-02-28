import { Channel, Connection, connect as connectAmqp, Message } from "amqplib";

let connection: Connection;
let channel: Channel;

export async function connect() {
  try {
    const url = "amqp://localhost:5672";

    connection = await connectAmqp(url);

    channel = await connection.createChannel();
  } catch (error) {
    console.log(error);
  }
}

export const sendMessages = (queue: string, message: string) => {
  return channel.sendToQueue(queue, Buffer.from(message));
};

export const consumer = (
  queue: string,
  callback: (message: Message) => void
) => {
  return channel.consume(queue, (message) => {
    callback(message);
    channel.ack(message);
  });
};

export { connection, channel };
