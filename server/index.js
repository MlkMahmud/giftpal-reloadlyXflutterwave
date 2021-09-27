import config from 'config';
import next from 'next';
import path from 'path';
import MailDev from 'maildev';
import app from './app';

const PORT = config.get('port');
const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev, dir: path.dirname(__dirname) });
const handle = server.getRequestHandler();

(async function main() {
  try {
    await server.prepare();
    app
      .use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
      })
      .listen(PORT, () => {
        console.log(
          `> Ready on localhost:${PORT} - env ${process.env.NODE_ENV}`,
        );
        if (dev) {
          new MailDev().listen();
        }
      });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}());
