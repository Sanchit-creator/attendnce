const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true,
        unique: true
    },
    locationCode: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});
const Location = mongoose.model('Location', locationSchema);
module.exports = Location;