import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';
import { createServer } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import getContext from './odoo-client/loaders';
import { authenticate } from './odoo-client/authentication';

const SERVER_PORT = process.env.PORT || 3500;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP (req => ({
  schema,
  context: getContext(req),
  graphiql: true
})));

const server = createServer(app);

// start the server
server.listen(SERVER_PORT, () => {
  // auth with Odoo backend
  authenticate()
    // success
    .then(() => console.log(`GraphQL API available at : http://localhost:${SERVER_PORT}`))
    // failure
    .catch(() => { console.log('Exiting.'); process.exit(1); })
});
