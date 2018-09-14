const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    name: String,
    surname: String,
    createdDate: String,
    city: String,
    address: String,
    phone: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Person', PersonSchema);