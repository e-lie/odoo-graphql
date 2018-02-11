export default {
  Partner: {
    user: (partner, args, context) => context.usersByPartnerId.load(partner.id),
  },
};
