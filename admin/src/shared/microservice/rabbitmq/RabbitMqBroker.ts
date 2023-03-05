import { Channel, Connection, connect as connectBroker } from "amqplib";
import { AppErrors } from "../../errors/AppErrors";

export class RabbitMqBroker {
  private connection: Connection | null = null;
  private channel: Channel | null = null;

  async connect(url: string): Promise<void> {
    this.connection = await connectBroker(url);
    this.channel = await this.connection.createChannel();
  }

  getChannel(): Channel {
    if (!this.channel) {
      throw new AppErrors("Connection not established!!");
    }

    return this.channel;
  }
}
