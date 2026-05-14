import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = { message: "Hello World!" };
});

router.get("/hello", (ctx) => {
  const { name } = ctx.query;
  if (!name) {
    ctx.status = 400;
    ctx.body = { msg: "Please send me your name!" };
    return;
  }
  ctx.body = { msg: `Hello ${name}` };
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3050;

app.listen(port, () => {
  console.log(`Koa app listening on port ${port}`);
});
