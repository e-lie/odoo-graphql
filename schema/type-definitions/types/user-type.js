// using gql can enable syntax highlighting
const userType = `
    # Anyone with an Odoo account
    type User {
        # ID for querying
        id: ID!
        
        # User's name
        name: String!
        
        # Associated partner
        partner: Partner!
    }
`;

export default userType;
