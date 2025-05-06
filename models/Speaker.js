const mongoose = require('mongoose');

const speakerSchema = new mongoose.Schema({
  name: String,
  email: String,
  speechDateTime: Date,
  remindersSent: {
    type: [Number],
    default: []
  }
});

module.exports = mongoose.model('Speaker', speakerSchema);
