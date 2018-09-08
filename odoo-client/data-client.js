import { host, port, createClient } from './authentication-client';

const dataClient = createClient({
  host,
  port,
  path: '/xmlrpc/2/object',
});

export default () => dataClient;
