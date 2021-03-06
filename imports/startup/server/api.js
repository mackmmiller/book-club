import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import BooksSchema from '../../api/books/Books.graphql';
import BooksResolvers from '../../api/books/resolvers';
import CopiesSchema from '../../api/copies/Copies.graphql';
import CopiesResolvers from '../../api/copies/resolvers';
import RequestsSchema from '../../api/requests/Requests.graphql';
import RequestsResolvers from '../../api/requests/resolvers';
import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers';

// ssss
const typeDefs = [BooksSchema, CopiesSchema, RequestsSchema, UsersSchema];

const resolvers = merge(BooksResolvers, CopiesResolvers, RequestsResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({ schema });
