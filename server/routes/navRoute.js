const express = require('express');
const cacheExpress = require('cache-express');
const router = express.Router();

const cache = cacheExpress({
    duration: 3600000,
    cacheControl: true,
    maxAge: 3600
});
router.use(cache);
router.get('/',(req,res)=>{
    try{
        res.render('pages/home',{title: 'Home'});
    }catch(error){
        res.status(500).send('Internal Server Error')
    }
});
router.get('/services',(req,res)=>{
    try{
        res.render('pages/services',{title: 'Products'});
    }catch(error){
        res.status(500).send('Internal Server Error')
    }
});
router.get('/contact-us',(req,res)=>{
    try{
        res.render('pages/contactUS',{title: 'Contact Us'});
    }catch (error){
        res.status(500).send('Internal Server Error')
    }
});
router.get('/about-us',(req,res)=>{
    try{
        res.render('pages/aboutUs',{title: 'About Us'});
    }catch (error){
        res.status(500).send('Internal Server Error')
    }
});
module.exports = router;