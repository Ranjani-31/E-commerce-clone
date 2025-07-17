const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'ProductId needed']
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'UserId needed']
    },
    rating:{
        type:Number,
        required: [true, 'Must give your rating'],

    },
    comment:{
        type: String,
        required: [true, 'Comment is required'],
        minlength: [1, 'Comment cannot be empty'],
        maxlength: [500, 'Comment is too long']
    },
    createdat:{
        type:Date,
        default: Date.now
    }
})

module.exports= mongoose.model('Review', reviewSchema)