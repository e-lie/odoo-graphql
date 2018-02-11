import xmlrpc from 'xmlrpc';

export const host = process.env.HOST;
export const db = process.env.DB;
export const password = process.env.PASSWORD;
const email = process.env.EMAIL;

const client = xmlrpc.createSecureClient({
  host,
  port: 443,
  path: '/xmlrpc/2/common'
});

export let uid;

const AUTHENTICATE_ACTION = 'authenticate';

export const authenticate = () => {
  return new Promise((resolve, reject) => {
    client.methodCall(AUTHENTICATE_ACTION, [db, email, password, null], (err, value) => {
      if (value){
        uid = value;
        console.log('Successfully authenticated to Odoo backend.');
        resolve(value);
      }
      else {
        console.log('Authentication with Odoo backend failed.');
        reject(err);
      }
    });
  });
};
