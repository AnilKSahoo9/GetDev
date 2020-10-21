const express = require('express');


const usersControllers = require('../controllers/users-controllers');

const userProfileControllers = require('../controllers/user-profile');
const router = express.Router();



router.get('/',usersControllers.getUsers);

router.post('/signup',usersControllers.signup);

router.post('/login',usersControllers.login);

router.get('/:uid',userProfileControllers.getUserByUserId);

router.patch('/:uid', userProfileControllers.updateUser);
module.exports = router;