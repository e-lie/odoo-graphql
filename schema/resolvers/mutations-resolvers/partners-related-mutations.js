import { createPartner, editPartner } from '../../../odoo-client/data/models/partners';

export default {
  Mutation: {
    addPartner: (root, { name }, context) =>
      createPartner({ name }).then(id => context.partners.load(id)),
    editPartner: (root, { id, ...rest }, context) => editPartner(id, rest)
      .then(() => { context.partners.clear(id); return context.partners.load(id); }),
  },
};
