import { createPartner, editPartner, getPartners } from '../odoo-client/partners';
import { editUser, getUsers } from '../odoo-client/users';

const resolvers = {
  User: {
    partner: (user, {}, context) => {
      const { partner_id: [id, _] } = user;
      return context.partners.load(id);
    },
  },
  Partner: {
    user: (partner, {}, context) => context.usersByPartnerId.load(partner.id),
  },
  Query: {
    allUsers: (root, args, context) => getUsers().then(users => {
      // put them into per-request cache
      users.forEach(user => context.users.prime(user.id, user));
      return users;
    }),
    allPartners: (root, args, context) => getPartners().then(partners => {
      // caching
      partners.forEach(partner => context.partners.prime(partner.id, partner));
      return partners;
    }),
    partner: (root, { id }, context) => context.partners.load(id),
    user: (root, { id }, context) => context.users.load(id),
  },
  Mutation: {
    addPartner: (root, { name }, context) => {
      return createPartner({ name }).then(id => context.partners.load(id));
    },
    editPartner: (root, { id, ...rest }, context) => {
      return editPartner(id, rest)
        .then(() => { context.partners.clear(id); return context.partners.load(id); });
    },
    editUser: (root, {id, ...rest }, context) => {
      return editUser(id, rest)
        .then(() => { context.users.clear(id); return context.users.load(id); });
    }
  }
};

export default resolvers;