const { Router } = require("express");

const router = Router();

const {registerUser, fetchRegisteredUsers, deleteRegisteredUser} = require('../controllers/userControllers');

router.post('/api/register', registerUser);
router.get('/api/registeredUsers', fetchRegisteredUsers);
router.delete('/api/deleteRegisteredUser/:id', deleteRegisteredUser);


module.exports=router;