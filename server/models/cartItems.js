const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'product Id is required'],
        
    },
    quantity: {
        type:Number,
        default:1,
        required:[true, 'quantiy is required']
    }
})
cartItemSchema.index({userId: 1, productId:1}, {unique: true})

module.exports = mongoose.model('CartItem', cartItemSchema)