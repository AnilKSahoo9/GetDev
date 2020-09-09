const express = require('express');
const bodyParse = require('body-parser');

// const placesRoutes = require('./routes/places-route');
const usersRoutes = require('./routes/user-route');
const HttpError = require('./models/http-error');
const app = express();
app.use(bodyParse.json());
app.use('/api/users',usersRoutes);
// app.use('/api/places',placesRoutes);
app.use((req,res,next)=>{
     const error =new HttpError('Could not find this route',404);
     throw error;
 });
app.use((error,req,res,next)=>{
if(res.headerSent){
    return next(error)
}
res.status(error.code || 500)
res.json({message:error.message||"AN unkown error occurred"});
});

app.listen(3000);