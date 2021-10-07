import config from 'config';
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: config.get('sentry.dsn'),
  enabled: config.get('sentry.enabled'),
});

export default Sentry;
