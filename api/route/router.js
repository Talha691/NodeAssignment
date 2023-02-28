const express=require('express');
const router=express.Router();
const middle=require('./../middleware/middleware');
const controller=require('./../controller/controller');
router.post('/signup',controller.signUp);
router.post('/login',controller.login);
router.post('/uploadimage',middle.tokenverify,middle.upload.single('profile'), controller.uploadInamge);
router.get('/profile',middle.tokenverify,controller.getdata);
router.put('/update',middle.tokenverify,controller.updatedta);
module.exports=router;