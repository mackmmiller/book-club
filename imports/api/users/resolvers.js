export default {
  Query: {
    user(obj, args, { user }) {
      return user || {};
    },
  },

  User: {
    email: user => user.emails[0].address,
    address: user => user.address,
    city: user => user.city,
    province: user => user.province,
    zip: user => user.zip,
  },
};
