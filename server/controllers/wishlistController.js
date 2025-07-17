const Wishlist=require('../models/wishlist')
const Product = require("../models/product")


export const addItem=async (req,res)=>{
        const {productId}=req.body
        const {userId}=req.userId 
        try{
            const newItem = new Wishlist({
                productId,
                userId
            })
            const result = await newItem.save()
            const newProduct = productId.findById(productId)
            
            res.status(200).json({result: 
                {_id: newProduct._id, 
                productName: newProduct.name, 
                price: newProduct.price, 
                discount: newProduct.discount ,
                percent: (newProduct.discount/newProduct.price) *100,
            }})
        }catch(e){
            res.send(404).json({message: e.error})
        }
}

export const getallItems = async (req,res)=>{
    const userId=req.userId 

    try{
        const result = await Wishlist.find({userId,}).populate('product')

        res.status(200).json({
            result: result.map(item=>({
                _id: item.productId._id, 
                productName:  item.productId.name, 
                price:  item.productId.price, 
                discount:  item.productId.discount ,
                percent: ( item.productId.discount/ item.productId.price) *100,
            }))
            
        })
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

export const removeItem = async (req, res)=>{
    const {id} = req.params

    try{
        await Wishlist.findByIdAndDelete(id)

        res.status(200).json({result: "successfully deleted!."})

    }catch(err){
        res.status(400).json({message: err.message})
    }
}


