import {
  Channel,
  Connection,
  Message,
  connect as connectRabbit,
} from "amqplib";

export class RabbitMqBroker {
  private connection: Connection | null = null;
  private channel: Channel | null = null;

  async connect(url: string): Promise<void> {
    this.connection = await connectRabbit(url);
    this.channel = await this.connection.createChannel();
  }

  getChannel(): Channel {
    if (!this.channel) {
      throw new Error("Connection not established!!");
    }

    return this.channel;
  }

  /* async send(queue: string, message: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async consume(
    queue: string,
    callback: (message: Message) => void
  ): Promise<void> {
    throw new Error("Method not implemented.");
  } */
}
