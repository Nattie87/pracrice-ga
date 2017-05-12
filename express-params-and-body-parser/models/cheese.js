const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  origin: { type: String, required: true },
  image: { type: String },
  tastingNotes: { type: String }
});

module.exports = mongoose.model('Cheese', cheeseSchema);