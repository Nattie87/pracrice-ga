const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const app            = express();
const port           = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));
app.use(expressLayouts);

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`Server has started on port ${port}.`));
