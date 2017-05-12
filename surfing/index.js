const express = require('express');
const morgan  = require('morgan');
const app     = express();
const port    = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));

app.get('/', (req, res) => res.render('index'));



app.listen(port, () => console.log(`Express has loaded on port: ${port}`));
