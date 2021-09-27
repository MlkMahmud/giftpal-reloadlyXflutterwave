import config from 'config';
import jwt from 'jsonwebtoken';

const PUBLIC_ENDPOINTS = ['/api/login', '/api/signup', '/api/logout'];

export default function verifyToken() {
  // eslint-disable-next-line func-names
  return async function (ctx, next) {
    if (PUBLIC_ENDPOINTS.includes(ctx.path)) {
      await next();
    } else {
      const token = ctx.cookies.get('token');
      if (!token) {
        ctx.throw(401);
      } else {
        try {
          const { id } = jwt.verify(token, config.get('jwtSecret'));
          ctx.userId = id;
          await next();
        } catch (e) {
          ctx.throw(401);
        }
      }
    }
  };
}
