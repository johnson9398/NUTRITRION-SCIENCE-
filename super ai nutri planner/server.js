// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
mongodb // Connect to MongoDB
mongoose.connect('mongodb://localhost/nutrition-chatbot', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Registration Route
app.post('/register', async (req, res) => {
    const { name, age, email, phone, height, gender } = req.body;
    const newUser  = new User({ name, age, email, phone, height, gender });
    await newUser .save();
    res.status(201).send('User  registered successfully');
});

// Chatbot Response Route
app.post('/chat', (req, res) => {
    const { prompt } = req.body;
    // Here you would implement your chatbot logic
    // For demonstration, we will return a simple response
    let response = `You asked about: ${prompt}. This is a placeholder response.`;
    res.json({ response });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});