const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
var bodyParser = require('body-parser');    

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')));
app.use(expressLayouts);

app.set('layout', './layouts/app');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '../views'));

// Navbar links routes
const navRoutes = require('./routes/navRoute');
app.use('/',navRoutes);

// whatsapp route
const whatsappRoute = require('./routes/whatsappRoute');
app.use('/',whatsappRoute);
// Send Mail route

const sendMail = require('./controller/sendMailController');
app.use('/',sendMail);

app.listen(5000);