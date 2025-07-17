const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
     category:{
        type:String,
        unique: true,
        reqired: [true, 'category is required'],
        minlength: [3, 'must be more than three characters'],
        maxlength: [30, 'must be less than 30 characters']
    },
    
     
})

module.exports= mongoose.model('Category', categorySchema)