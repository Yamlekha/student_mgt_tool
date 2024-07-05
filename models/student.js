const mongoose = require('mongoose');

//Define the student schema
const studentsSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type:String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    student_img: {
        type: String,
        required:true
    }
    
});

const Student =  mongoose.model('Student', studentsSchema);
module.exports = Student;