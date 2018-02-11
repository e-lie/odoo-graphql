import express from 'express';
import graphqlHTTP from 'express-graphql';
import { createServer } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './schema/schema';
import getContext from './odoo-client/data/loaders';
import { authenticate } from './odoo-client/authentication-client';

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

// needed for getting requests from other domains
app.use(cors());

// needed to parse request
app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP(req => ({
  schema,
  context: getContext(req),
  graphiql: true,
})));

const server = createServer(app);

// start the server
server.listen(SERVER_PORT, () => {
  // auth with Odoo backend
  authenticate()
  // success
  // eslint-disable-next-line no-console
    .then(() => console.log(`GraphQL API and GraphiQL available at : http://localhost:${SERVER_PORT}`))
    // failure
    // eslint-disable-next-line no-console
    .catch(() => { console.log('Exiting.'); process.exit(1); });
});
