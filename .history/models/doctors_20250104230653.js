const mongoose=require('mongoose');

const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    dept_name:{
        type:String,
        required:true
    },  
    ph_no:{
        type:String,
        required:true
    },
});