const mongoose = require('mongoose');

const eventRegistrationSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  guests: { type: String, required: true },
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EventRegistration', eventRegistrationSchema);
