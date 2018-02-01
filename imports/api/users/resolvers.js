export default {
  Query: {
    user(obj, args, { user }) {
      console.log(user);
      return user || {};
    },
  },

  User: {
    email: user => user.emails[0].address,
    address: user => user.profile.address,
    city: user => user.profile.city,
    province: user => user.profile.province,
    zip: user => user.profile.zip,
  },
};
