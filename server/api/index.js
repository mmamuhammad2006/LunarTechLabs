const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('./security/helmet');

const app = express();

// Middleware
helmet(app);  // Helmet for security headers
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, './public')));

// Set EJS for templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Routes
const navRoutes = require('./routes/navRoute');
const whatsappRoute = require('./routes/whatsappRoute');
const sendMailController = require('./controller/sendMailController');

app.use('/', navRoutes);
app.use('/', whatsappRoute);
app.use('/', sendMailController);

// Export the app as a module
module.exports = app;