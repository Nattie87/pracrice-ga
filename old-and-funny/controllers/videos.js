const Video     = require('../models/video');

function videosIndex(req, res) {
  Video
  .find()
  .exec()
  .then(videos => {
    return res.render('videos/index', { videos });
  })
  .catch(err => {
    return res.render('error', { error: err });
  });
}

module.exports = {
  index: videosIndex
};
