import { print } from 'graphql';
import gql from 'graphql-tag';

// using gql can enable syntax highlighting
const partnersQueries = gql`
    type Query {
        partner(id: ID!): Partner
        allPartners: [Partner]

        user(id: ID!): User
        allUsers: [User]
    }
`;

export default print(partnersQueries);
