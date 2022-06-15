const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // userimage: {
    //     type:String,
    //     required: false
    // },
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


blogSchema.virtual('coverImagePath').get(function() {
    if (this.coverImage != null && this.coverImageType != null) {
      return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
  })

module.exports = mongoose.model('Blog',blogSchema)