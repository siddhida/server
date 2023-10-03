const BookModel = require('../model/bookList');

module.exports = {
    async getAllBooks (req, res){
        // Return a list of books
        const allBooks = await BookModel.find({})
        if(allBooks){
         return  res.status(201).send({allBooks, status: 'Success'});
        }
        return res.status(400).send({status: 'Failed'});
      } ,
    async getOneBook(req, res){
        // Return a single book by ID 
        const { id } = req.params;
        const foundBook = await BookModel.findById(id);
        if(foundBook){
          return res.status(201).send({foundBook, status: 'Success'});
        }
        return res.status(400).send({status: 'Failed'});
      } ,
    async AddOneBook(req, res){
        // Create a new book
        const { title, author } = req.body;
        const savedBook = await BookModel.create({title, author});
        if(savedBook){
          return res.status(201).send({status: 'Success'});
        }
        return  res.status(400).send({status: 'Failed'});
      },
    async UpdateOneBook(req, res){
        const { title, author } = req.body;
        const bookToUpdate = await BookModel.findByIdAndUpdate(req.params.id, {title, author});
        if(bookToUpdate){
          return res.status(201).send({bookToUpdate , status: 'Success'});
        }
        return res.status(400).send({status: 'Failed'});
    } 
}