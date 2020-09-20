const express = require('express');

const usersController = require('../controller/userprofile-controller');

const router = express.Router();

// router.get('/', usersController.getUsers);

router.post('/', usersController.createUser);

router.get('/:uid',usersController.getUserByUserId);
router.patch('/:uid', usersController.updateUser);
module.exports = router;