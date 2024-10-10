const express = require('express');
const router = express.Router();

// implemeting chat whatsapp logic
router.get('/whatsapp',(req,res)=>{
    const number = '923456047058';
    const whatsappUrl = `https://wa.me/${number}`;
    res.redirect(whatsappUrl);
})

module.exports = router