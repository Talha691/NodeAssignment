const mongoose=require('mongoose');
const imageSchema=new mongoose.Schema({
    image:{
        type: String
    }
})

const imageModel=mongoose.model('Image',imageSchema);
module.exports=imageModel;