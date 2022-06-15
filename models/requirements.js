const mongoose = require('mongoose');

const requirementsmsgSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    requirement: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Requirements-Messages',requirementsmsgSchema)