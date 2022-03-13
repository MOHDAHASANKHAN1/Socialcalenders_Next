import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

module.exports = mongoose.models.Messages || mongoose.model('Messages', userSchema)