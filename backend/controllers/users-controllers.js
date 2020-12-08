const uuid = require('uuid').v4;
const HttpError = require('../models/http-error');
const user = require('../models/users.js');
// const DUMMY_USERS =[
//     {
//    id: 'u1',
//    name: 'nirjharini swain' ,
//    email: 'swainrupali5@gmail.com',
//    password:'rupali',
//     gender:'female',
//     bio:'i m a it professional',
//     location:'Cuttack',
//     work_profile:'full stack',
//     github:'rupali1234880.github.io',
//     linkedin:'nirjharini.linkedin.io',
//     skill:['java','c','c++'],
//    project:[{
//      name:'game',
//      description:'simple game'
//    },
//    {name:'github page',
//   description:"to fetch all github user details"}
// ]
//     }
// ];

const getUsers = async(req, res,next) => {
  let users;
  try{
      users= await user.find({},'-password');
  }catch(err){
      const error = new HttpError(
          'Fetching users failed,please try again later',500
      );
      return next(error);
  };
  res.json({users:users.map(User => User.toObject({getters:true}))});
};

// signup user
const signup= async(req, res,next) => {;
    
    const{ name,email, password,gender,bio,location,work_profile,github,linkedin,skill,project} = req.body;

    let existingUser;
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
            'creating user failed, please try again.',
            500
        );
        return next(error); 
    }
    

    res.status(201).json({user: createdUser});
};

//login
const login = async(req, res,next) => {
    const {email,password} = req.body;
    let existingUser;
    try{
        existingUser=await user.findOne({email:email})
    }
    catch(err){
        const error=new HttpError(
            'logging  in failed, please try again later.',
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


    res.json({message: 'Logged in!'});
};

          
    
 
    
//exports.DUMMY_USERS = DUMMY_USERS
exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;