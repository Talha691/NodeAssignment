const mongoose=require('mongoose');
const mongodb=('mongodb+srv://talha:talhasaeed@cluster0.vmpka9t.mongodb.net/test');
const db=()=>{
        console.log("DB is connected.....");
        mongoose.set('strictQuery',false);
        return mongoose.connect(mongodb,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
    }
    module.exports=db