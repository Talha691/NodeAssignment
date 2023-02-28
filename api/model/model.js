const mongoose=require('mongoose');
const signUPSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});
const signUpModel=mongoose.model('User',signUPSchema);
module.exports=signUpModel;