const { Router } = require("express");
const router = Router();

const {getAllBooks, getOneBook, AddOneBook, UpdateOneBook} = require('../controllers/bookControlers');

router.get('/api/books', getAllBooks);
router.get('/api/books/:id', getOneBook);
router.post('/api/books', AddOneBook);
router.put('/api/books/:id', UpdateOneBook);

module.exports=router;
