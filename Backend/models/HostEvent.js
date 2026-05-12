const mongoose = require('mongoose');

const hostEventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  organization: { type: String, default: '' },
  eventTitle: { type: String, required: true },
  eventType: { type: String, required: true },
  date: { type: String, required: true },
  guests: { type: String, required: true },
  timeSlot: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HostEvent', hostEventSchema);
