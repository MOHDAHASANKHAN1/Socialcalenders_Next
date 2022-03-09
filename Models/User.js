import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: Number,
    password: String,
    role: String
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema)