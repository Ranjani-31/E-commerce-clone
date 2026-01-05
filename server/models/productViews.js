const mongoose = require('mongoose')

const productViews = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
       
    },
    views: {
        type:Number,
        default: 0

    },
    date:{
        type:Date,
        required:true
    }
})

module.exports = mongoose.model('ProductView', productViews);