import Router from 'koa-router';
import { registerUser } from '../controllers/baseController';

const router = new Router();

router.post('/signup', async (ctx) => {
  const { body } = ctx.request;
  const response = await registerUser(body);
  if (response.status) {
    ctx.status = 201;
    ctx.body = response;
  } else {
    ctx.status = 400;
    ctx.body = response;
  }
});

export default router;
