import { Channel } from "amqplib";
import { MessageSender } from "./MessageSender";

import { RabbitMqBroker } from "./RabbitMqBroker";

const messageBroker = new RabbitMqBroker();

export async function connect(url: string): Promise<void> {
  await messageBroker.connect(url);
}

export const getChannel = (): Channel => {
  return messageBroker.getChannel();
};

export function createMessageSender(queue: string): MessageSender {
  const channel = messageBroker.getChannel();
  return new MessageSender(channel, queue);
}

export function createMessageReceiver(queue: string) {
  const channel = messageBroker.getChannel();
  return new MessageSender(channel, queue);
}
