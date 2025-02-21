// backend/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: String,
    height: Number,
    gender: String,
});

module.exports = mongoose.model('User ', UserSchema);