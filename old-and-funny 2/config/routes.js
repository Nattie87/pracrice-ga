const express     = require('express');
const router      = express.Router();
const videos      = require('../controllers/videos');

router.get('/', (req, res) => res.render('index'));

router.get('/videos')
  .get(videos.index)
  .post(videos.create);
router.route('/parks/new')
  .get(videos.new);
router.get('/videos/:id')
  .get(videos.show);
router.route('/videos/:id/edit')
  .get(videos.edit);
router.route('/videos/:id')
  .delete(videos.delete);

module.exports = router;
