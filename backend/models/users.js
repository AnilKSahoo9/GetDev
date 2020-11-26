const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');
//const Schema = mongoose.Schema;
var usersSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name:{ type :String,required:true},
    email:{ type :String,required:true},
    password: { type :String,required:true},
    gender: { type :String,required:true},
    bio:{ type :String,required:true},
    location:{ type :String,required:true},
    work_profile:{ type :String,required:true},
    github:{ type :String,required:true},
    linkedin:{ type :String,required:true},
    skill:{ type :Array,required:true},// [ String, String, String],
    project:{ type :Array,required:true}//[{String}, {String}],
});
//used  for the password encryption...
// usersSchema.pre("save", async function(next){
//     if(this.isModified("password")){
//         console.log(`The current password is ${this.password}`);
//         this.password=await bcrypt.hash(this.password,10);
//         console.log(`The hashed password is ${this.password}`);
//     }
//     next();
// })
module.exports = mongoose.model('users', usersSchema);
