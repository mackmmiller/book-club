import Requests from './requests';
import Copies from '../copies/copies';
import Books from '../books/books';

/* Helper functions */
function checkForBook(title, author) {
  const bookId = Books.findOne({ title, author });
  return bookId;
}

export default {
  Query: {
    requests(obj, args) {
      return Requests.find({}).fetch();
    },
    myRequests(obj, args, { userId }) {
      return Requests.find({ requester: userId }).fetch();
    },
  },

  Request: {
    requester: request => Meteor.users.findOne({ _id: request.requester }),
    supplier: request => Meteor.users.findOne({ _id: request.supplier }),
    book: request => Books.findOne(request.book._id),
  },

  Mutation: {
    createRequest(obj, { title, author }, { userId }) {
      const bookId = checkForBook(title, author);
      const requestId = Requests.insert({
        book: bookId,
        requester: userId,
      });
      return Requests.findOne(requestId);
    },
    addSupplier(obj, { _id }, { userId }) {
      Requests.update(_id, { $set: { supplier: userId } });
    },
  },
};
