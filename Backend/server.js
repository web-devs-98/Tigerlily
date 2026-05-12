require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Resend } = require('resend');

const Reservation = require('./models/Reservation');
const EventRegistration = require('./models/EventRegistration');
const HostEvent = require('./models/HostEvent');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// --- Routes ---

// 1. Reservations
app.post('/api/reservations', async (req, res) => {
  try {
    const { firstName, lastName, date, time, guests, phone, specialRequests } = req.body;

    const newReservation = new Reservation({ firstName, lastName, date, time, guests, phone, specialRequests });
    await newReservation.save();

    const emailHtml = `
      <h2>New Reservation Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Special Requests:</strong> ${specialRequests || 'None'}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Tigerlily <onboarding@resend.dev>',
      to: [process.env.OWNER_EMAIL],
      subject: `New Reservation: ${firstName} ${lastName} on ${date}`,
      html: emailHtml,
    });

    if (error) return res.status(201).json({ message: 'Saved, but email failed.', error });
    res.status(201).json({ message: 'Reservation created successfully!', data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// 2. Event Registration (Participate)
app.post('/api/events/register', async (req, res) => {
  try {
    const { eventName, name, email, phone, guests, notes } = req.body;

    const newRegistration = new EventRegistration({ eventName, name, email, phone, guests, notes });
    await newRegistration.save();

    const emailHtml = `
      <h2>New Event Registration</h2>
      <p><strong>Event:</strong> ${eventName}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Notes:</strong> ${notes || 'None'}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Tigerlily <onboarding@resend.dev>',
      to: [process.env.OWNER_EMAIL],
      subject: `Event Registration: ${name} for ${eventName}`,
      html: emailHtml,
    });

    if (error) return res.status(201).json({ message: 'Saved, but email failed.', error });
    res.status(201).json({ message: 'Event registration successful!', data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// 3. Host an Event Proposal
app.post('/api/events/host', async (req, res) => {
  try {
    const { name, email, phone, organization, eventTitle, eventType, date, guests, timeSlot, description } = req.body;

    const newProposal = new HostEvent({ name, email, phone, organization, eventTitle, eventType, date, guests, timeSlot, description });
    await newProposal.save();

    const emailHtml = `
      <h2>New Event Hosting Proposal</h2>
      <p><strong>Organizer:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
      <p><strong>Event Title:</strong> ${eventTitle}</p>
      <p><strong>Event Type:</strong> ${eventType}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Expected Guests:</strong> ${guests}</p>
      <p><strong>Preferred Time Slot:</strong> ${timeSlot}</p>
      <p><strong>Description/Vision:</strong> ${description}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Tigerlily <onboarding@resend.dev>',
      to: [process.env.OWNER_EMAIL],
      subject: `Event Proposal: ${eventTitle} by ${name}`,
      html: emailHtml,
    });

    if (error) return res.status(201).json({ message: 'Saved, but email failed.', error });
    res.status(201).json({ message: 'Event proposal submitted successfully!', data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
