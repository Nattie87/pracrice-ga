const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => res.render('index'));

router.get('/beyonces', (req, res) => res.send('INDEX'));

router.get('/beyonces/new', (req, res) => res.send('NEW'));

router.get('/beyonces/:id', (req, res) => res.send('SHOW'));

router.post('/beyonces/:id/edit', (req, res) => res.send('CREATE'));

router.get('/beyonces/:id/edit', (req, res) => res.send('EDIT'));

router.put('/beyonces/:id/edit', (req, res) => res.send('UPDATE'));

router.delete('/beyonces/:id', (req, res) => res.send('DELETE'));

module.exports = router;
