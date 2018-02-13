import { Mongo } from 'meteor/mongo';

const Requests = new Mongo.Collection('requests');

export default Requests;
