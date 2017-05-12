const mongoose    = require('mongoose');

const videoSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true, unique: true },
  description: { type: String, trim: true },
  videoId: { type: String, trim: true },
  location: { type: String, trim: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Video', videoSchema);
