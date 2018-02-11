import Trades from './trades';
import Books from '../books/books';

export default {
  Mutation: {
    createTrade(obj, { party1, party2 }) {
      console.log(party1, party2);
      const tradeId = Trades.insert({ party1 });
      return Trades.findOne(tradeId);
    },
  },
};
