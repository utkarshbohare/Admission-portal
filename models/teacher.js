const { name } = require('ejs');
const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
    name: {
        type: String,
        Required: true,
    },
   email: {
        type: String,
        Required: true,
    },
    password:{
        type:String,
        Required:true
  },
    role: {
        type: String,
        deafult: 'teacher'
    },
    
}, {timestamp: true})

const teacherModel =mongoose.model('teacher',teacherschema)
module.exports=TeacherModel