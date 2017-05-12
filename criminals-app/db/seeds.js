const config     = require('../config/config');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.db);

const Criminal = require('../models/criminal');
Criminal.collection.drop();

Criminal
  .create([
    {
      name: 'Pablo Escobar',
      location: 'Colombia',
      status: 'Dead'
    },
    {
      name: 'Whitey Bulger',
      location: 'USA',
      status: 'Alive'
    },
    {
      name: 'Charles Bronson',
      location: 'UK',
      status: 'Alive'
    },
    {
      name: 'Charles Manson',
      location: 'USA',
      status: 'Alive'
    }
  ])
  .then(criminals => {
    console.log(`${criminals.length} criminals were saved.`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
