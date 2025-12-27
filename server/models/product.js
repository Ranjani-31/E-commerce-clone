const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name: {
        type:String,
        minlength: [5, 'at least 5 characters long'],
        maxlength: [30, 'at most 30 characters long'],
        required: true 
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        min: [1, 'must be greater than 1'],
        required: true,
    },
    description: {
        type: String,
        minlength: [20, 'Description must be at least 20 characters'],
        maxlength: [200, 'must be at most 200 characters'],
        required: true 
    },  
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:'true'
    },
     review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    },
     discount: {
        type: mongoose.Schema.Types.Decimal128,
        min: [1, 'must be greater than 1'], 
        default: 0
        
    },
     category:[
      { type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'}]
      ,
     stock: {
        type: Number,
        required: true,
        default: 1
     }

})

module.exports = mongoose.model('Product', productSchema)