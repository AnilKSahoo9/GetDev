const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users-routes');
const Httperror = require('./models/http-error');
const app = express();

app.use(bodyParser.json());


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

mongoose.connect('mongodb+srv://Devdatabase:GetDevconnection@cluster0.b9nxv.mongodb.net/GetDevs?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});




