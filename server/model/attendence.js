const mongoose = require('mongoose');
const attendenceSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: true
    },
    lastname: { 
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
    },
    locationId: 
        { 
            type: String,
            required: true
        }
    ,
    date:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Attendence = mongoose.model('Attendence', attendenceSchema);
module.exports = Attendence;