import { Channel } from "amqplib";

export class MessageReceiver {
  constructor(private channel: Channel, private queue: string) {}

  async receive(callback: (message: string) => void): Promise<void> {
    await this.channel.assertQueue(this.queue);
    await this.channel.consume(this.queue, (message) => {
      if (message) {
        callback(message.content.toString());
        // this.channel.ack(message);
      }
    });
  }
}
