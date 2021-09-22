import config from 'config';
import {
  clientId, clientSecret, fetch, refreshToken,
} from './utils';

class Giftcards {
  constructor() {
    if (!clientId || !clientSecret) {
      throw new Error(
        '[Reloadly]: please provide a valid client id and client secret',
      );
    }
    this.baseUrl = config.get('reloadly.giftcards');
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.token = null;
    this.expiresAt = null;
  }

  async validateToken() {
    const { token, expiresAt } = await refreshToken({
      expiresAt: this.expiresAt,
      scope: this.baseUrl,
      token: this.token,
    });
    if (token) {
      this.token = token;
      this.expiresAt = expiresAt;
    }
  }

  async get(path) {
    this.validateToken();
    const url = `${this.baseUrl}/${path}`;
    const data = await fetch(url, {
      headers: { Authorization: `Bearer ${this.token}` },
    });
    return data;
  }

  async post(path, payload) {
    this.validateToken();
    const url = `${this.baseUrl}/${path}`;
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify(payload),
    });
    return data;
  }
}

export default new Giftcards();
