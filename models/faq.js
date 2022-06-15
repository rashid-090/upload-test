const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    heading:{
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Faq',faqSchema)