import { getPartners } from '../../../odoo-client/data/models/partners';

export default {
  Query: {
    allPartners: (root, args, context) => getPartners().then((partners) => {
      // caching
      partners.forEach(partner => context.partners.prime(partner.id, partner));
      return partners;
    }),
    partner: (root, { id }, context) => context.partners.load(id),
  },
};
