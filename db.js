const mongoose = require('mongoose');

//Define the MongoDB URL
const mongoURL = 'mongodb://localhost:27017/students'

//Set up Mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('MongoDB Connected');
})

db.on('disconnected',()=>{
    console.log('MongoDb disconnectedd');
})

db.on('error',()=>{
    console.log('Mongodb connection error');
})

module.exports = db;
