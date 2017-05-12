const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser     = require('body-parser');
const router         = require('./config/routes');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const port           = process.env.PORT || 3000;
const app            = express();

// We need to use the package method-overrride when using a PUT for a form submission as HTML forms don't allow any other verb apart from POST by default
const methodOverride = require('method-override');

const databaseURL = 'mongodb://localhost/restful-routing';
mongoose.connect(databaseURL);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
// Use methodOverride
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(router);


app.listen(port, () => console.log(`Express is listening to port ${port}`));
