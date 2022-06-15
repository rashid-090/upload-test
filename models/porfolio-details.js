const mongoose = require('mongoose');

const portfolioDetailsSchema = new mongoose.Schema({
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

portfolioDetailsSchema.virtual('coverImagePath').get(function() {
    if (this.coverImage != null && this.coverImageType != null) {
      return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
  })


module.exports = mongoose.model('PortfolioDetail',portfolioDetailsSchema);