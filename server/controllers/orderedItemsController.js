import orderedItems from '../models/orderedItems'

const  OrderedItems = require('../models/orderedItems')
const CartItems = require("../models/cartItems")
const mongoose = require('mongoose')

export  const addItem = async (req, res)=>{

    const userId = req.userId
    const session = await mongoose.startSession()
     session.startTransaction()
    try {
        const cartItems = await CartItems.find({userId}).session(session)

        await OrderedItems.insertMany(cartItems,{session})
        const deleteItems = cartItems.map(item=> item._id)
        await CartItems.deleteMany({_id: {$in: deleteItems}}, {session})

        const result = await orderedItems.find({userId}).populate('product')
        
        res.status(200).json({result: 
            result.map(item=>({
                name: item.productId.name,
                deliveryStatus: item.deliveryStatus,
                quantity: item.quatity,
                orderedAt: item.orderedAt
            }))
        })

       await session.commitTransaction()
    }catch(err){
        await session.abortTransaction();
        res.status(400).json({message: err.message})
    }finally{
        await session.endSession();
    }
}

