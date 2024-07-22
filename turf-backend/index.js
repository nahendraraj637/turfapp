const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/turfbooking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User model
const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String,
}));

// Turf model
const Turf = mongoose.model('Turf', new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
}));

// Auth middleware
const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    jwt.verify(token, 'your_secret_key', (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// Routes
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ email: user.email }, 'your_secret_key');
    res.json({ success: true, token });
  } else {
    res.json({ success: false });
  }
});

app.post('/api/turfs', auth, async (req, res) => {
  const { name, location, price } = req.body;
  const turf = new Turf({ name, location, price });
  await turf.save();
  res.json({ message: 'Turf added!' });
});

app.post('/api/bookings', auth, async (req, res) => {
  const { date, time } = req.body;
  // Handle booking logic
  res.json({ message: 'Booking created!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

