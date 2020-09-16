const express = require('express');

const usersController = require('../controller/user-controller');

const router = express.Router();

// router.get('/', usersController.getUsers);

router.post('/', usersController.createUser);

router.get('/:uid',usersController.getUserByUserId);

module.exports = router;