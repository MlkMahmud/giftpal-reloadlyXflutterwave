import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';

const app = new Koa();
app.use(bodyParser());
app.use(helmet());

export default app;
