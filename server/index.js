import next from 'next';
import path from 'path';
import app from './app';

const PORT = process.env.PORT || 4000;
const dev = process.env.NODE_ENV === 'development';
const server = next({ dev, dir: path.join(__dirname, '..') });
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
      });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}());
