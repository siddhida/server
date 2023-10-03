const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksModelSchema = new Schema({
//   id: String,
  title: String,
  author: String,
//   printYear: Number,
//   quantityAvailable: Number,
//   quantityDefected: Number,
//   quantitySold: Number,
//   quantityRented: Number,
});

const BookModel = mongoose.model('BookModel', booksModelSchema);
module.exports =  BookModel;