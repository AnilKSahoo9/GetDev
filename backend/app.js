const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

//var jsonParser = bodyParser.json();

// const data = new user({
// _id: new mongoose.Types.ObjectId(),
// name: "anil" ,
// email: 'asahoo@gmail.com',
// pasword: 'anil',
// gender: 'male',
// bio: 'i m a it professional',
// location: 'Cuttack',
// work_profile: 'full stack',
// github: 'anil1234880.github.io',
// linkedin: 'anil.linkedin.io',
// skill: ['java', 'c', 'c++'],
// project: [{
//     name: 'game',
//     description: 'simple game'
// },
// {
//     name: 'github page',
//     description: "to fetch all github user details"
// }]
// });
// data.save().then((result)=>{
//     console.warn(result)
// })
// .catch(err => console.warn(err))


// // user.find({}, function (err, users) {
// //     if (err) console.warn(err);
// //     console.warn(users);
// // })
// //const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const Httperror = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

//app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new Httperror('could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    };
    res.status(error.code || 500)
    res.json({ message: error.message || 'An unknow error occurred' });

});
// app.post('/user', jsonParser, function (req, res) {
//     const data = new user({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         email: req.body.email,
//         password:req.body.password,
//         gender: req.body.gender,
//         bio: req.body.bio,
//         location: req.body.location,
//         work_profile: req.body.work_profile,
//         github: req.body.github,
//         linkdin: req.body.linkdin,
//         skill: req.body.skill,
//         project: req.body.project
//     });
//     //res.end(req.body.name)
//     data.save().then((result) => {
//         res.status(201).json(result)
//     })
//         .catch((err) => console.warn(err))
// })
// app.put("/user/:id", jsonParse, function (req, res) {
//     user.updateOne({ _id: req.params.id },
//         {
//             $set:
//                 { 
//                     name: req.body.name ,
//                     email: req.body.email ,
//                     gender: req.body.gender ,
//                     bio: req.body.bio ,
//                     location: req.body.location ,
//                     work_profile: req.body.work_profile ,
//                     github: req.body.github ,
//                     linkdin: req.body.linkdin ,
//                     skill: req.body.skill ,
//                     project: req.body.project
//                 }
//         }).then((result) => {
//             res.status(201).json(result)
//         }).catch ((err) => { console.warn(err) });
// })
//Devdatabase    password:GetDevconnection  dbname:GetDevs
mongoose.connect('mongodb+srv://Devdatabase:GetDevconnection@cluster0.zvor7.mongodb.net/GetDevs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});




