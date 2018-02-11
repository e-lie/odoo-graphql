import xmlrpc from 'xmlrpc';
import { host } from './authentication-client';

const dataClient = xmlrpc.createSecureClient({
  host,
  port: 443,
  path: '/xmlrpc/2/object',
});

export default () => dataClient;
