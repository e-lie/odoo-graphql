import { merge } from 'lodash';
// types resolvers
import usersResolvers from './fields-resolvers/users';
import partnersResolvers from './fields-resolvers/partners';
// queries resolvers
import partnersQueriesResolvers from './queries-resolvers/partners-related-queries';
import usersQueriesResolvers from './queries-resolvers/users-related-queries';
// mutations resolvers
import partnersMutationsResolvers from './mutations-resolvers/partners-related-mutations';
import usersMutationsResolvers from './mutations-resolvers/users-related-mutations';

export default merge(
  usersResolvers,
  partnersResolvers,
  partnersMutationsResolvers,
  usersMutationsResolvers,
  partnersQueriesResolvers,
  usersQueriesResolvers,
);
