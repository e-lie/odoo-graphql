const rootMutation = `
    # RootMutation
    type Mutation {
        # Create a partner
        addPartner(name: String!): Partner
        
        # Update a partner
        editPartner(id: String!, name: String): Partner

        # Update a user
        editUser(id: String!, name: String): User
    }
`;

export default rootMutation;
