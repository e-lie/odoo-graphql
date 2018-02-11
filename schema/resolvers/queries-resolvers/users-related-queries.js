import { getUsers } from '../../../odoo-client/data/models/users';

export default {
  Query: {
    allUsers: (root, args, context) => getUsers().then((users) => {
      // put them into per-request cache
      users.forEach(user => context.users.prime(user.id, user));
      return users;
    }),
    user: (root, { id }, context) => context.users.load(id),
  },
};
