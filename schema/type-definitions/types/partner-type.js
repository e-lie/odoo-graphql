import { print } from 'graphql';
import gql from 'graphql-tag';

// using gql can enable syntax highlighting
const partnerType = gql`
    type Partner {
        id: ID
        name: String,
        user: User
    }
`;

export default print(partnerType);
