import { print } from 'graphql';
import gql from 'graphql-tag';

// using gql can enable syntax highlighting
const userType = gql`
    type User {
        id: ID
        name: String
        partner: Partner
    }
`;

export default print(userType);
