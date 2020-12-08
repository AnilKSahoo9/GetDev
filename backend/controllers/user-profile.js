const par = require('./users-controllers');

const user = require('../models/users.js');
const HttpError = require('../models/http-error');


//to get user details by the help user id
 const getUserByUserId=async (req,res,next)=>{
  const userId = req.params.uid;
  let userDetails;
  try{   userDetails = await user.findById(userId);}
  catch (err){
    const error = new HttpError(
      'Something went wrong; could not find a user ',500
    );
    return next(error);
  }
  if(!user||user.length === 0){
    const error = new HttpError('Could not find a places for the provided userid',404);
    return next(error);
 }
  res.json({userDetails: userDetails.toObject({getters:true})});

};

//to update the user profile
//  const updateUser = (req, res, next) => {
//   const { bio,work_profile,github,linkedin,skill,project } = req.body;
//   const creatorId = req.params.uid;

//   const updatedUser= { ...par.DUMMY_USERS.find(p => p.id === creatorId) };
//   const userIndex = par.DUMMY_USERS.findIndex(p => p.id === creatorId);
//   updatedUser.bio = bio;
//   updatedUser.work_profile = work_profile;
//   updatedUser.github = github;
//   updatedUser.linkedin=linkedin;
//   updatedUser.skill=skill;
//   updatedUser.project=project;

//   par.DUMMY_USERS[userIndex] = updatedUser;
// console.log(updatedUser)
//   res.status(200).json({user: updatedUser});
// };


//  exports.updateUser = updateUser;
exports.getUserByUserId=getUserByUserId;