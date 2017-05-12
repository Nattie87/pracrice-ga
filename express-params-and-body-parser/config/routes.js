const router = require('express').Router();
const Cheese = require('../models/cheese');

router.get('/', (req, res) => res.render('index'));

router.get('/cheeses', (req, res) => {
  Cheese
  .find(req.query)
  .exec()
  .then((cheeses) => {
    res.render('cheeses', { cheeses });
  })
  .catch((err) => {
    res.status(500).end(err);
  });
});

router.post('/cheeses', (req, res) => {
  Cheese
  .create(req.body)
  .then(() => {
    return res.redirect('/cheeses');
  })
  .catch(err => {
    return res.status(500).end(err);
  });
});

router.get('/cheeses/:name', (req, res) => {
  Cheese
  .findOne({ name: req.params.name })
  .exec()
  .then(cheese => {
    if (!cheese) return res.status(404).end();
    return res.render('cheese', { cheese });
  })
  .catch(() => {
    return res.status(500).end();
  });
});

module.exports = router;
