const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userModelSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  role: String,
  password: String,
  verified: Boolean,
  activationToken: String,
});


const UserModel = mongoose.model('UserModel', userModelSchema);
module.exports =  UserModel;




// Create a new document
// const myDocument = new MyModel({ name: 'John', age: 30, email: 'john@example.com' });
// myDocument.save(function (err) {
//   if (err) console.error(err);
// });

// // Find documents
// MyModel.find({ name: 'John' }, function (err, docs) {
//   if (err) console.error(err);
//   console.log(docs);
// });

// // Update a document
// MyModel.updateOne({ name: 'John' }, { age: 31 }, function (err, res) {
//   if (err) console.error(err);
//   console.log(res);
// });

// // Delete a document
// MyModel.deleteOne({ name: 'John' }, function (err) {
//   if (err) console.error(err);
// });
