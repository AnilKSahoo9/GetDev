const express = require('express');


const usersControllers = require('../controllers/users-controllers');

const userProfileControllers = require('../controllers/user-profile');

const friendRqustControllers = require('../controllers/frnd-rqust');

const router = express.Router();



router.get('/',usersControllers.getUsers);

router.post('/signup',usersControllers.signup);

router.post('/login',usersControllers.login);

router.get('/:uid',userProfileControllers.getUserByUserId);

router.get('/search/:filter/:searchparameter',friendRqustControllers.searchUserbyWorkProfile);

// router.patch('/:uid', userProfileControllers.updateUser);
module.exports = router;