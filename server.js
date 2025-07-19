const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact.Routes'); // ✅ Fix capitalization if needed

dotenv.config();
connectDB();

const app = express();

// ✅ Set up CORS for your Vercel frontend
app.use(cors({
  origin: 'https://profile-frontend-9d29.vercel.app', // Must include protocol
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use(express.json()); // Middleware to parse JSON requests

// ✅ Route for all contact APIs
app.use('/api/contacts', contactRoutes);

// ✅ Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
