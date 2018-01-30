import Books from './books';
import Copies from '../copies/copies';

export default {
  Query: {
    books() {
      return Books.find({}).fetch();
    },
  },

  Book: {
    copies: book => Copies.find({ bookId: book._id }).fetch(),
  },

  Mutation: {
    createNewBook(obj, { title, author }) {
      const bookId = Books.insert({
        title,
        author,
      });
      return Books.findOne(bookId);
    },
  },
}
;