const mongoose=require('mongoose')
const validator =  require('validator')
const user=require('../constants/roles')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Name is required'],
        minlength:[3, 'Name must be at least 3 Characters'],
        maxlength:[20, 'Name must be at most 20 characters']
    },
    password: {
        type:String,
        required:[true, 'password is required']
    },
    email: {
        type: String,
        required:[true, 'Email is required'],
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid Email'
        }        
    },
    phone: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    role: {
        type:String,
        default: user.CUSTOMER,
        required: true
    }
})


module.exports  = mongoose.model('User', userSchema)
