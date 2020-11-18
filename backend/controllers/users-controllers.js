const uuid = require('uuid').v4;
//const jwt = require('jsonwebtoken');
//const bcrypt = require ('bcryptjs');

const HttpError = require('../models/http-error');
const user = require('../models/users.js');
const DUMMY_USERS =[
    {
   id: 'u1',
   name: 'nirjharini swain' ,
   email: 'swainrupali5@gmail.com',
   password:'rupali',
    gender:'female',
    bio:'i m a it professional',
    location:'Cuttack',
    work_profile:'full stack',
    github:'rupali1234880.github.io',
    linkedin:'nirjharini.linkedin.io',
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
const getUsers = (req, res,next) => {
    res.json({users:DUMMY_USERS});
};


const signup= async(req, res,next) => {;
    
    const{ name,email, password,gender,bio,location,work_profile,github,linkedin,skill,project} = req.body;

    //const hasUser =DUMMY_USERS.find(u => u.email === email);
    //throw new HttpError('could not identify user , credentilas seem to be wrong.',422);
    let existingUser
    try{
         existingUser = await user.findOne({ email:email})
    }
    catch(err){
        const error=new HttpError(
            'signing up failed, please try again later.',
            202
        );
        return next(error); 
    }
    if (existingUser){
        const error = new HttpError(
        'User exits already, please login instead.',
        422
     );
        return next(error);
    }
     //DUMMY_USERS.push(createdUser);
    //data .save().then((result)=>{res.status(201).json({user: createdUser.toObject({ getters : true})});
    


    const createdUser = new user({
        id: uuid(),
        name,
        email,
        password,
        gender,
        bio,
        location,
        work_profile,
        github,
        linkedin,
        skill,
        project,  
    });
    try{
         await createdUser.save();
    }catch(err){
        const error=new HttpError(
            'creating place failed, please try again.',
            500
        );
        return next(error); 
    }
    

    res.status(201).json({user: createdUser});
};

const login = async(req, res,next) => {
    const {email,password} = req.body;
    let existingUser;
    try{
        existingUser=await user.findOne({email:email})
    }
    catch(err){
        const error=new HttpError(
            'logging  in failed, please try again.',
            202
        );
        return next(error); 
    }
    if(!existingUser||existingUser.password !== password){
        const error=new HttpError(
            'Invalid credential, could not log you in.',
            401
        );
            return next(error);
        
        }

//    const identifierdUser = DUMMY_USERS.find( u => u.email === email);
//     if (!identifierdUser || identifierdUser.password !==password){
//        throw new HttpError('could not identify user , credentilas seem to be wrong.',401)
//     }
    
    res.json({message: 'Logged in!'});
};

          
    
 
    
//exports.DUMMY_USERS = DUMMY_USERS
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;