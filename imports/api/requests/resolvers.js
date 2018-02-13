import Requests from './requests';
import Copies from '../copies/copies';
import Books from '../books/books';

export default {
  Query: {
    requests(obj, args, context) {
      return Requests.find({}).fetch();
    },
  },

  Request: {
    requester: request => Meteor.users.findOne({ _id: request.requester }),
    book: request => Books.findOne({ title: request.title, author: request.author }),
  },

  Mutation: {
    createRequest(obj, { title, author }, { userId }) {
      const bookId = checkForBook(title, author);
      const requestId = Requests.insert({
        book: bookId,
        requester: userId,
      });
      console.log(requestId);
      return Requests.findOne(requestId);
    },
  },
};

/* Helper functions */
function checkForBook(title, author) {
  const bookId = Books.findOne({ title, author });
  return bookId;
}
