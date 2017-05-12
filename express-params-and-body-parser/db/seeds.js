const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURI = 'mongodb://localhost/cheese';
mongoose.connect(dbURI);

const Cheese = require('../models/cheese');

Cheese.collection.drop();

Cheese
  .create([{
    name: 'Gorgonzola',
    origin: 'Italy',
    tastingNotes: 'Gorgonzola is traditionally a rich creamy cheese, but the blue-green ripples add a sharp spicy flavor that provides an excellent contrast to its richness. The taste ranges from mild to sharp, depending on age.',
    image: 'http://www.monthlyclubs.com/media/catalog/product/cache/13/image/285x/9df78eab33525d08d6e5fb8d27136e95/g/o/gorgonzola-1.jpg'
  },{
    name: 'Caerphilly',
    origin: 'Wales',
    tastingNotes: 'This young cheese has an ivory white rind with a pale colored paste and semi-firm texture. It\'s a moist, crumbly cheese, and its flavor is usually described as salty buttermilk, slightly sour, but buttery.',
    image: 'http://www.monthlyclubs.com/media/catalog/product/cache/13/image/285x/9df78eab33525d08d6e5fb8d27136e95/c/a/caerphilly-1.jpg'
  },{
    name: 'Roquefort',
    origin: 'France',
    tastingNotes: 'Roquefort has a tingly pungent taste, a distinct bouquet, and a flavor that combines the sweet burnt-caramel taste of sheep\s milk with the sharp, metallic tang of the blue mold.',
    image: 'http://www.monthlyclubs.com/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/r/o/roquefort-1.jpg'
  }])
  .then((cheese) => {
    console.log(`${cheese.length} cheeses created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
