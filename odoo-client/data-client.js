import xmlrpc from 'xmlrpc';
import { host } from './authentication';

const dataClient = xmlrpc.createSecureClient({
  host,
  port: 443,
  path: '/xmlrpc/2/object'
});

export const getDataClient = () => dataClient;
