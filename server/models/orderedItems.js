const mongoose = require('mongoose');
 
const orderedItemSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'UserId must needed']
    },
    
productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'productId must needed']
    },
    quantity:{
        type: Number,
        required: [true, 'quantity required']
    },
    orderedAt: {
        type: Date,
        default: Date.now 
    },
   deliveryStatus:{
        type:String,
        enum: {
            values: ['pending', 'delivered', 'canceled', 'shipped'],
            message: '{VALUE} is not valid'
        },
        required:[true, 'Delivery status is required'],
        defult:'pending'
      }
},
    
)

module.exports = mongoose.model('OrderedItem', orderedItemSchema) 