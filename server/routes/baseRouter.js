import Router from 'koa-router';
import { registerUser, loginUser } from '../controllers/baseController';

const router = new Router();

router.post('/api/signup', async (ctx) => {
  const { body } = ctx.request;
  const response = await registerUser(body);
  if (response.status) {
    ctx.status = 201;
  } else {
    ctx.status = 400;
  }
  ctx.body = response;
});

router.post('/api/login', async (ctx) => {
  const { body } = ctx.request;
  const response = await loginUser(body);
  if (response.status) {
    ctx.status = 200;
  } else {
    ctx.status = 400;
  }
  ctx.body = response;
});

export default router;
