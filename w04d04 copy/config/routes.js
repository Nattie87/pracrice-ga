const express = require('express');
const router  = express.Router();
//controllers
const videos  = require('../controllers/videos');

router.get('/', (req, res) => res.render('index'));

router.route('/videos')
  .get(videos.index)
  .post(videos.create);

router.route('/videos/new')
  .get(videos.new);

router.route('/videos/:id')
  .get(videos.show);

module.exports = router;
