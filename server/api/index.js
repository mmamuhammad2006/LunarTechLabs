const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// EJS and Express Layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(expressLayouts);
app.set('layout', './layouts/app');

// Routes
const navRoutes = require('./routes/navRoute');
const whatsappRoute = require('./routes/whatsappRoute');
const sendMailController = require('./controllers/sendMailController');

app.use('/', navRoutes);
app.use('/', whatsappRoute);
app.use('/', sendMailController);

// Export the Express app as a serverless function
module.exports = app;