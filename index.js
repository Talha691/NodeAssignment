const express=require('express');
const app=express();
app.use(express.json());
const route=require('./api/route/router');
const mongoose=require('mongoose');
const helper=require('./api/helper/helper');
helper();
app.use('',route);
app.listen(3000,()=>{
    console.log('working...')
});