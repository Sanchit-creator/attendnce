const userController = require('../controllers/user_controllers');
const express = require('express');
const router = express.Router();

router.post('/register-user', userController.signUp);
router.get('/all-users', userController.get);
router.post('/login', userController.signIn);

module.exports = router;

