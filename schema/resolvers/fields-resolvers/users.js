export default {
  User: {
    partner: (user, args, context) => {
      // eslint-disable-next-line no-unused-vars
      const { partner_id: [id, ...rest] } = user;
      return context.partners.load(id);
    },
  },
};
