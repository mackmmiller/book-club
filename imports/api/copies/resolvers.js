import Copies from './copies';
import Books from '../books/books';

function checkForBook(title, author) {
  let bookId = Books.findOne({ title, author });
  if (!bookId) {
    Books.insert({ title, author });
    bookId = Books.findOne({ title, author });
  }
  return bookId;
}

export default {
  Mutation: {
    createCopy(obj, { title, author }, { userId }) {
      const bookId = checkForBook(title, author);
      const copyId = Copies.insert({
        bookId: bookId._id,
        owner: userId,
        withOwner: true,
      });
      return Copies.findOne(copyId);
    },
  },
};
