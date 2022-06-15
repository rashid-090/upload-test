const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    heading:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    coverImage: {
        type: Buffer,
        required: false
    },
    coverImageType: {
        type:String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

serviceSchema.virtual('coverImagePath').get(function() {
    if (this.coverImage != null && this.coverImageType != null) {
      return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
  })


module.exports = mongoose.model('Service',serviceSchema)