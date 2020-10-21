const uuid = require('uuid').v4;

const HttpError = require('../models/http-error');

const DUMMY_USERS = [
  {
    creator_id:'u1',
    gender:'female',
    bio:'i m a it professional',
    location:'jharsuguda',
    work_profile:'full stack',
    github:'arati.github.io',
    linkedin:'arati.linkedin.io',
    skill:['java','c','c++'],
   project:[{
     name:'game',
     description:'simple game'
   },
   {name:'github page',
  description:"to fetch all github user details"}

  ]
}
];

// const getUsers = (req, res, next) => {
//   res.json({ users: DUMMY_USERS });
// };

const createUser =(req,res,next)=>{
  const {creator_id,gender,bio,location,work_profile,github,linkedin,skill,project}=req.body;
  const createUser={
    creator_id:uuid(),
    gender,
    bio,
    location,
    work_profile,
    github,
    linkedin,
    skill,
   project,

   
  };
  DUMMY_USERS.push(createUser);
  res.status(201).json({user:createUser});
 };
 const updateUser = (req, res, next) => {
  const { gender,bio, location,work_profile,github,linkedin,skill,project } = req.body;
  const creatorId = req.params.uid;

  const updatedUser= { ...DUMMY_USERS.find(p => p.creator_id === creatorId) };
  const userIndex = DUMMY_USERS.findIndex(p => p.creator_id === creatorId);
  updatedUser.gender=gender;
  updatedUser.bio = bio;
  updatedUser.location = location;
  updatedUser.work_profile = work_profile;
  updatedUser.github = github;
  updatedUser.linkedin=linkedin;
  updatedUser.skill=skill;
  updatedUser.project=project;

  DUMMY_USERS[userIndex] = updatedUser;
console.log(updatedUser)
  res.status(200).json({user: updatedUser});
};
 const getUserByUserId=(req,res,next)=>{
  const userId = req.params.uid;
  const user = DUMMY_USERS.filter(p=>{
      return p.creator_id===userId;
  });
  if(!user||user.length === 0){
return next(new HttpError('Could not find a places for the provided userid'));
 }
  res.json({user});

};



exports.createUser = createUser;
 exports.updateUser = updateUser;
exports.getUserByUserId=getUserByUserId;