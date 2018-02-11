import { editUser } from '../../../odoo-client/data/models/users';

export default {
  Mutation: {
    editUser: (root, { id, ...rest }, context) => editUser(id, rest)
      .then(() => { context.users.clear(id); return context.users.load(id); }),
  },
};
