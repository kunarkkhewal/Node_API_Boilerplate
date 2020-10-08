const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});

const dbConnection = mongoose.connection;
dbConnection.on('error', ()=>{
    console.log("connection error");
});
dbConnection.once('open', ()=>{
    console.log("connection done");
})


module.exports = mongoose;