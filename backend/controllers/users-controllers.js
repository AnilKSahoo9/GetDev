const uuid = require('uuid');
//const jwt = require('jsonwebtoken');
//const bcrypt = require ('bcryptjs');

const HttpError = require('../models/http-error');
const DUMMY_USERS =[
    {
   id: 'u1',
   name: 'nirjharini swain' ,
   email: 'swainrupali5@gmail.com',
   pasword:'rupali',
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


const signup= (req, res,next) => {;
    const{ name,email, password,gender,bio,location,work_profile,github,linkedin,skill,project} = req.body;

    //const hasUser =DUMMY_USERS.find(u => u.email === email);
    //throw new HttpError('could not identify user , credentilas seem to be wrong.',422);


    const createdUser = {
        id: uuid,
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

    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({user: createdUser});
};

const login = (req, res,next) => {
    const {email,password} = req.body;

   //const identifierdUser = DUMMY_USERS.find( u => u.email === email);
    //if (!identifierdUser || identifierdUser !==password){
       // throw new HttpError('could not identify user , credentilas seem to be wrong.',401)
    //}
    
    res.json({message: 'Logged in!'});
};

          
    
 
    
exports.DUMMY_USERS = DUMMY_USERS
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;