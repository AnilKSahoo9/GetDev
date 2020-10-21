const par = require('./users-controllers');


const HttpError = require('../models/http-error');


 const updateUser = (req, res, next) => {
  const { bio,work_profile,github,linkedin,skill,project } = req.body;
  const creatorId = req.params.uid;

  const updatedUser= { ...par.DUMMY_USERS.find(p => p.id === creatorId) };
  const userIndex = par.DUMMY_USERS.findIndex(p => p.id === creatorId);
  updatedUser.bio = bio;
  updatedUser.work_profile = work_profile;
  updatedUser.github = github;
  updatedUser.linkedin=linkedin;
  updatedUser.skill=skill;
  updatedUser.project=project;

  par.DUMMY_USERS[userIndex] = updatedUser;
console.log(updatedUser)
  res.status(200).json({user: updatedUser});
};
 const getUserByUserId=(req,res,next)=>{
  const userId = req.params.uid;
  const user = par.DUMMY_USERS.filter(p=>{
      return p.id===userId;
  });
  if(!user||user.length === 0){
return next(new HttpError('Could not find a places for the provided userid'));
 }
  res.json({user});

};




 exports.updateUser = updateUser;
exports.getUserByUserId=getUserByUserId;