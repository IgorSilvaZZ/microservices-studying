import { app } from "./app";

(async () => {
  await app.listen({ port: 4000 });
})();
