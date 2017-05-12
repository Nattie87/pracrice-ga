const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;
const router = require('./config/routes');

const dbURI = 'mongodb://localhost/cheese';
mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => console.log(`Running on port: ${port}`));
