const mongoose    = require('mongoose');
mongoose.Promise  = require('bluebird');
const env         = require('../config/env');

// Require models
const Video       = require('../models/video');

mongoose.connect(env.db, () => {
  console.log('Connected');
});

// Delete all videos
Video.collection.drop();

Video
.create([
  {
    name: 'Old Ladies Fighting',
    description: 'Two oldies fighting about Thanksgiving ',
    videoId: 'H01g2mkWsNo',
    location: 'America'
  },
  {
    name: 'Old Man Dancing',
    description: 'Old man having it large',
    videoId: 'aD1euxkzE9I',
    location: 'Somewhere'
  },
  {
    name: 'Old People Fails Compilation',
    description: 'Just old people failing',
    videoId: 'mCpAdH_zkIA',
    location: 'Somewhere and Everywhere'
  }
])
.then(videos => {
  console.log(`${videos.length} were created`);
})
.catch(err => {
  console.log(`Error: ${err}`);
})
.finally(() => {
  mongoose.connection.close();
});
