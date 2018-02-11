const partnerType = `
    # Anyone who interacts with the company
    type Partner {
        # ID for querying
        id: ID!
        
        # Partner's name
        name: String!
        
        # Associated user
        user: User
    }
`;

export default partnerType;
