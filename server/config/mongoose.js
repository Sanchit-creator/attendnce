const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://attendence:attendence@attendence.b4p0rmy.mongodb.net/?attendenceretryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind("Error in connecting"));
db.once('open', function() {
    console.log('CONNECTED TO DB ===> Mongodb');
})

module.exports = db;

