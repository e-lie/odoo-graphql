export default `
    type User {
        id: ID
        name: String
        partner: Partner
    }

    type Partner {
        id: ID
        name: String,
        user: User
    }

    type Query {
        partner(id: ID!): Partner
        user(id: ID!): User
        allPartners: [Partner]
        allUsers: [User]
    }

    type Mutation {
        addPartner(name: String!): Partner
        editPartner(id: String!, name: String): Partner
        editUser(id: String!, name: String): User
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;