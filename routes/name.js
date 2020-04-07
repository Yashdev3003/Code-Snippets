const express=require('express');
const bodyParser=require('body-parser');
const adminRoute=require('./admin');
const router=express.Router();

router.get('/users', (req, res, next)=> {
    const names=adminRoute.name;
    res.render('users', {
        pageTitle: 'Users',
        nameList: names,
    });
});

module.exports=router;