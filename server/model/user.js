const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    locationName: {
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const User = mongoose.model('User', userSchema);
module.exports = User;