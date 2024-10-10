const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('pages/home');
});
router.get('/services',(req,res)=>{
    res.render('pages/services');
});
router.get('/contact-us',(req,res)=>{
    res.render('pages/contactUS');
});
router.get('/about-us',(req,res)=>{
    res.render('pages/aboutUs');
});

module.exports = router;