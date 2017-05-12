const express     = require('express');
const router      = express.Router();
const videos      = require('../controllers/videos');

router.get('/', (req, res) => res.render('index'));
router.get('/videos')
  .get(videos.index);

module.exports = router;
