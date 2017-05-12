const express           = require('express');
const morgan            = require('morgan');
const expressEjsLayouts = require('express-ejs-layouts');
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');


const app               = express();
const env               = require('./config/env');
const router            = require('./config/routes');

// Settings
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);


// Middleware
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
app.use(expressEjsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


app.listen(env.port, () => console.log(`Express has loaded on port: ${env.port}`));
