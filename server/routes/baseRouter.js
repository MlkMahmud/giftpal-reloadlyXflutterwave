import Router from 'koa-router';
import { registerUser, loginUser } from '../controllers/baseController';
import verifyToken from '../middleware/authentication';

const router = new Router();
const isProd = process.env.NODE === 'production';

router.post('/api/signup', async (ctx) => {
  const { body } = ctx.request;
  const { status, token, message } = await registerUser(body);
  if (status) {
    ctx.cookies.set('token', token, {
      httpOnly: true,
      secure: isProd,
    });
    ctx.status = 201;
    ctx.body = '';
  } else {
    ctx.status = 400;
    ctx.body = {
      status,
      message,
    };
  }
});

router.post('/api/login', async (ctx) => {
  const { body } = ctx.request;
  const { status, message, token } = await loginUser(body);
  if (status) {
    ctx.cookies.set('token', token, {
      httpOnly: true,
      secure: isProd,
    });
    ctx.status = 200;
    ctx.body = '';
  } else {
    ctx.status = 400;
    ctx.body = {
      status,
      message,
    };
  }
});

router.post('/api/logout', async (ctx) => {
  ctx.cookies.set('token', null);
  ctx.status = 200;
  ctx.body = '';
});

router.use(verifyToken());

export default router;
