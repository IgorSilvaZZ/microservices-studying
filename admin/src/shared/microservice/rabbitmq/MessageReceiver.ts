import { Channel } from "amqplib";

export class MessageReceiver {
  constructor(private channel: Channel, private queue: string) {}

  async receive(callback: (message: string) => Promise<void>): Promise<void> {
    await this.channel.assertQueue(this.queue);
    await this.channel.consume(this.queue, async (message) => {
      if (message) {
        await callback(message.content.toString());
        this.channel.ack(message);
      }
    });
  }
}
