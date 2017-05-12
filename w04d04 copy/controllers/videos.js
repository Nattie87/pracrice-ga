const Video = require('../models/video');


function videosIndex(req, res) {

  Video
    .find()
    .exec()
    .then(videos => {
      return res.render('video', { videos });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function videosShow(req, res) {
  Video
    .findById(req.params.id)
    .exec()
    .then(video => {
      if (!video) {
        return res.render('error', { error: 'No video found.' });
      }
      return res.render('videos/show', { video });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function videosNew(req, res) {
  return res.render('videos/new');
}

function videosCreate(req, res) {
  Video
    .create(req.body)
    .then(video => {
      if (!video) return res.render('error', { error: 'No video was created!' });
      return res.redirect('/videos');
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

module.exports = {
  index: videosIndex,
  show: videosShow,
  new: videosNew,
  create: videosCreate
};
