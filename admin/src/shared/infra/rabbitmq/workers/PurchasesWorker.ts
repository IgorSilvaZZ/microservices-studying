import { sendMessages, consumer } from "..";

export class PurchasesWorker {
  async publish(queue: string, message: string) {
    try {
      await sendMessages(queue, message);
    } catch (error) {
      console.log("Erro ao enviar mensagem!");

      console.log(error);
    }
  }

  async consume(queue: string) {
    try {
      await consumer(queue, (message) => {
        console.log(message.content.toString());
      });
    } catch (error) {
      console.log(error);
    }
  }
}
