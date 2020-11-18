const mongoose = require('mongoose');
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
module.exports = mongoose.model('users', usersSchema);
