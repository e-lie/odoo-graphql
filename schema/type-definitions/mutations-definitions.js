import { print } from 'graphql';
import gql from 'graphql-tag';

// using gql can enable syntax highlighting
const partnersMutations = gql`
    type Mutation {
        addPartner(name: String!): Partner
        editPartner(id: String!, name: String): Partner

        editUser(id: String!, name: String): User
    }
`;

export default print(partnersMutations);
