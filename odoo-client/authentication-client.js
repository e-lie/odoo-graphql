import xmlrpc from 'xmlrpc';

export const host = process.env.ODOO_HOST;
// default port is 8069 (non-secure)
export const port = parseInt(process.env.ODOO_PORT || '8069', 10);
export const db = process.env.DB;
export const password = process.env.PASSWORD;
const email = process.env.EMAIL;

const AUTHENTICATE_ACTION = 'authenticate';

export const createClient = port === 443 ? xmlrpc.createSecureClient : xmlrpc.createClient;

const authClient = createClient({
  host,
  port,
  path: '/xmlrpc/2/common',
});

// uid is needed for authenticating future requests
let uid;
export const getUid = () => uid;

export const authenticate = () => new Promise((resolve, reject) => {
  authClient.methodCall(AUTHENTICATE_ACTION, [db, email, password, null], (err, value) => {
    if (value) {
      uid = value;
      // eslint-disable-next-line no-console
      console.log('Successfully authenticated to Odoo backend.');
      resolve(value);
    } else {
      // eslint-disable-next-line no-console
      console.log('Authentication with Odoo backend failed.');
      reject(err);
    }
  });
});
