const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const env        = require('../config/env');
const Video      = require('../models/video');

mongoose.connect(env.db, () => {
  console.log('Connected');
});

//this gets rid of aything that has already been created and not needed anymore
Video.collection.drop();

Video
  .create([
    {
      name: 'Life hack 1',
      description: 'the first video',
      youtubeId: '<iframe width="560" height="315" src="https://www.youtube.com/embed/-npsO3pptAQ" frameborder="0" allowfullscreen></iframe>',
      genre: 'life-hacks'
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
