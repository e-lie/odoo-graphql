const rootQuery = `
    #RootQuery
    type Query {
        # Fetch a partner
        partner(id: ID!): Partner
        
        # Fetch all partners
        allPartners: [Partner]

        # Fetch a user
        user(id: ID!): User
        
        # Fetch all users
        allUsers: [User]
        
        # Inspect a model's fields and check which ones seem to be of interest
        modelFields(model: String!): [Field]
    }
`;

export default rootQuery;
