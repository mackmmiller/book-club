import Copies from './copies';

export default {
  Mutation: {
    createCopy(obj, { owner, bookId }) {
      const copyId = Copies.insert({
        owner,
        bookId,
        withOwner: true,
      });
      return Copies.findOne(copyId);
    },
  },
};
