import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import Sentry from './lib/sentry';
import baseRouter from './routes/baseRouter';

const app = new Koa();
app.on('error', (err, ctx) => {
  Sentry.withScope((scope) => {
    scope.addEventProcessor((event) => Sentry.Handlers.parseRequest(event, ctx.request));
    Sentry.captureException(err);
  });
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});
app.use(bodyParser());
app.use(helmet());
app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());

export default app;
