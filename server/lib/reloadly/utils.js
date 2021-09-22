import config from 'config';
import crossFetch from 'cross-fetch';

export const clientId = config.get('reloadly.clientId');
export const clientSecret = config.get('reloadly.clientSecret');

export const fetch = async (url, options = {}) => {
  const response = await crossFetch(url, options);
  const data = await response.json();

  if (response.ok) {
    return data;
  }
  throw new Error(`[Reloadly]: ${data.message}`);
};

export const refreshToken = async ({ scope, token, expiresAt }) => {
  const currentTime = Date.now();
  if (token && currentTime > expiresAt) {
    return {};
  }
  // eslint-disable-next-line camelcase
  const { access_token, expiresIn } = await fetch(
    'https://auth.reloadly.com/oauth/token',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audience: scope,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      }),
    },
  );

  return {
    token: access_token,
    expireAt: expiresIn * 1000 + currentTime,
  };
};
