import { sendMessages } from "..";

export class PurchasesWorker {
  async publish(queue: string, message: string) {
    try {
      await sendMessages(queue, message);
    } catch (error) {
      console.log("Erro ao enviar mensagem!");

      console.log(error);
    }
  }
}
