const fieldType = `
    # Contains information about a record
    type Field {
        # ID for querying
        id: String!
        
        # Scalar or relational
        type: String!
        
        # Full description
        description: String
        
        # Readable name
        name: String!
    }
`;

export default fieldType;
