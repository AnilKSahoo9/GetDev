const user = require('../models/users.js');

const searchUserbyWorkProfile = async(req, res,next)=> {
	const searchfriend = req.params.searchparameter;
	const filter = req.params.filter;
	let userDetails;
	try{  if(filter=="location") {userDetails = await user.find({location:{$regex:searchfriend,$options:'$i'}});}
    else if(filter=="work_profile"){userDetails = await user.find({work_profile:{$regex:searchfriend,$options:'$i'}});}
    else {userDetails = await user.find({skill:{$regex:searchfriend,$options:'$i'}});}}
	catch (err){
	  const error = new HttpError(
		'Something went wrong; could not find a user ',500
	  );
	  return next(error);
	}
	
	
  res.json({userDetails:userDetails.map(people => people.toObject({getters:true}))});
  
};
exports.searchUserbyWorkProfile=searchUserbyWorkProfile;