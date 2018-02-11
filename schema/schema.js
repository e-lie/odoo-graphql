import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers/resolvers';
// import types
import userType from './type-definitions/types/user-type';
import partnerType from './type-definitions/types/partner-type';
import fieldType from './type-definitions/types/field-type';
// then queries and mutations (subscriptions will come later)
import queries from './type-definitions/queries-definitions';
import mutations from './type-definitions/mutations-definitions';


const executableSchema = makeExecutableSchema({
  typeDefs: [
    // types
    fieldType,
    partnerType,
    userType,

    // queries
    queries,

    // mutations
    mutations,
  ],
  resolvers,
});

export default executableSchema;
