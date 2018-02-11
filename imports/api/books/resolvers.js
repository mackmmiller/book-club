import Books from './books';
import Copies from '../copies/copies';

export default {
  Query: {
    books(obj, args, { bookId }) {
      return Books.find({ bookId }).fetch();
    },
    myBooks(obj, args, { userId }) {},
  },

  Book: {
    copies: book => Copies.find({ bookId: book._id }).fetch(),
  },

  Mutation: {
    createBook(obj, { title, author }) {
      const bookId = Books.insert({
        title,
        author,
      });
      return Books.findOne(bookId);
    },
  },
};
