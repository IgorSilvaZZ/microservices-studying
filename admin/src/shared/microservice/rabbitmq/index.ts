import { Channel } from "amqplib";
import { MessageReceiver } from "./MessageReceiver";
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
  const channel = getChannel();
  return new MessageSender(channel, queue);
}

export function createMessageReceiver(queue: string): MessageReceiver {
  const channel = getChannel();
  return new MessageReceiver(channel, queue);
}
