'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var toDoItemSchema = Schema( {
  userId: ObjectId,
  title: String,
  description:String,
  completed: Boolean,
  createdAt: Date,
  calendar: String,
  time: String,
  hide: Boolean,
} );

module.exports = mongoose.model( 'ToDoItem', toDoItemSchema );
