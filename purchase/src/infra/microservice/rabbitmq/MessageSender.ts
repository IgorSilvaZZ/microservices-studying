import { Channel } from "amqplib";

export class MessageSender {
  constructor(private channel: Channel, private queue: string) {}

  async send(message: string): Promise<void> {
    await this.channel.assertQueue(this.queue);
    await this.channel.sendToQueue(this.queue, Buffer.from(message));
  }
}
