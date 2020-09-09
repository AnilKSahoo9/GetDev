const uuid = require('uuid').v4;

const HttpError = require('../models/http-error');

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Max Schwarz',
    email: 'test@test.com',
    skill: 'java',
    project:'webapp'
}
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const createUser =(req,res,next)=>{
  const {id,name,email,skill,project}=req.body;
  const createUser={
    id:uuid(),
    name,
    email,
    skill,
    project
   
  };
  DUMMY_USERS.push(createUser);
  res.status(201).json({place:createUser});
 };

 const getUserByUserId=(req,res,next)=>{
  const userId = req.params.uid;
  const user = DUMMY_USERS.filter(p=>{
      return p.id ===userId;
  });
  if(!user||user.length === 0){
return next(new HttpError('Could not find a places for the provided userid'));
 }
  res.json({user});

};



exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getUserByUserId=getUserByUserId;