import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import baseRouter from './routes/baseRouter';

const app = new Koa();
app.use(bodyParser());
app.use(helmet());
app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());

export default app;
