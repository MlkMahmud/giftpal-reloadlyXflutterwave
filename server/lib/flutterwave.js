import config from 'config';
import Fluttewave from 'flutterwave-node-v3';

const PUBLIC_KEY = config.get('flutterwave.pubKey');
const SECRET_KEY = config.get('flutterwave.secKey');

export default new Fluttewave(PUBLIC_KEY, SECRET_KEY);
