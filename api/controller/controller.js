const express=require('express')
const jwt=require('jsonwebtoken');
const secretkey='seebiz'
const userModel = require("../model/model")
const imageModel = require("../model/image")
const app=express();
app.use(express.json());
exports.signUp=async(req,res)=>{
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const password=req.body.password;
    const email=req.body.email;
    const data = new userModel(req.body)
    let result  = await data.save()
    return res.json(result)
}

exports.login=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user= await userModel.findOne({email});
    if(user.email===email && user.password===password){
        const token=jwt.sign({email:user.email},secretkey)
        res.json({
            message:'welcome Back',
            token
        })
    }
    else{
        res.json({
            message:'sorry I cannot find user'
        })
    }
};

exports.uploadInamge= async (req,res)=>{
    let image = req.file.filename
    let userImage = await imageModel.create({
        image
    })
    return res.status(200).json({
        message: "Successfully",
        userImage
    })
};

exports.getdata=async (req,res)=>{
    console.log(req.email)
    let userdata= await userModel.findOne({email:req.email});
    if(userdata){
        res.json({userdata})
    }
    else{
        res.json({
            message:'cannot find data'
        });
    }
};

exports.updatedta=async (req,res)=>{
    let user=await userModel.findOneAndUpdate(
        {
            email:req.email
        },
        {
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            password:req.body.password,
            email:req.body.email
        },
        {
            new:true
        });
    return res.json({message:'dataupdated',user});
}
