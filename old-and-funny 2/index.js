// Require the express package
const express           = require('express');
const morgan            = require('morgan');
const mongoose          = require('mongoose');
const expressEjsLayouts = require('express-ejs-layouts');
const bodyParser        = require('body-parser');
const methodOverride   = require('method-override');

// Create a new app
const app     = express();
const env     = require('./config/env');
const router  = require('./config/routes');

// Setting
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

mongoose.connect(env.db);

// Middleware
app.use(morgan('dev'));
app.use(expressEjsLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(router);

// Tell the app to listen on this port for HTTP requests
app.listen(env.port, () => console.log(`Express has loaded on port: ${env.port}`));
