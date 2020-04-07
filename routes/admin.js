const express=require('express');
const bodyParser=require('body-parser');
const router=express.Router();

const names=[];
router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home',
    });
})

router.post('/names', (req, res, next)=> {
    names.push({name: req.body.name});
    res.redirect('/admin/users');
});

exports.route=router;
exports.name=names;