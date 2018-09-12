const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    name: String,
    surname: String,
    createdDate: String,
    city: String,
    adress: String,
    phone: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Person', PersonSchema);