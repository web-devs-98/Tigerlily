const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: String, required: true },
  phone: { type: String, required: true },
  specialRequests: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Reservation', reservationSchema);
