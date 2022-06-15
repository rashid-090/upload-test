const mongoose = require('mongoose');

const emailmsgSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('emailmessage',emailmsgSchema)