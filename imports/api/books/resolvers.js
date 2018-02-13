import Books from './books';
import Copies from '../copies/copies';

export default {
  Query: {
    books(obj, args, { bookId }) {
      return Books.find({ bookId }).fetch();
    },
    // searchForBook needs work
    searchForBook(obj, { title }) {
      return Books.find({ title }).fetch();
    },
    myBooks(obj, args, { userId }) {
      const copies = Copies.find({ owner: userId });
      const ids = copies.map(book => book.bookId);
      const books = Books.find({ _id: { $in: ids } }).fetch();
      return books;
    },
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
