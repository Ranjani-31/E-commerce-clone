const Product = require('../models/product') 
const mongoose= require('mongoose')
// users(customers) can only acess

 const getProducts = async(req, res)=>{
    const page=parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) ||15;
    
    const skip=(page-1)*limit 
    try{
    const products= await Product.find().limit(limit).skip(skip)
        res.status(200).json({
            currentPage: page,
            pageSize: limit,
            products,
        })
    }catch(err){
        res.status(400).json({message: err.message})
    }
    
}
// both can acesss

 const getProduct = async (req, res)=>{

    const {id}= req.params 
    try{

        const item = await Product.findById(id).populate('seller')

        if(!item){
            return res.status(400).json({message: 'Product Not found'})
        }
        console.log(item)
        res.status(200).json({ 
             _id: item._id,
            name: item.name,
            selingPrice: item.price,
            discount: item?.discount,
            displayPercent: item.price>0 ? (item?.discount / item?.price)*100 : 0,
            displayPrice: item.price-item?.discount,
            description: item.description,
            stock: item.stock,
            sellerName: item.seller.name
            
                   

        })

    }catch(err){
        console.log(err)
        res.status(400).json({message: err.message, name: err.name})
    }
}

//to get similar products
// access only for sellers

 const createProduct = async(req, res)=>{
    
    const {name, price, description,  stock, category} = req.body
    const sellerId = req.userId
    try{
        const newProduct = new Product({
                name,
                description,
                price,
                sellerId,
                stock,
                category
            })
            const result=await newProduct.save()

            res.status(200).json({
                _id: result._id,
                name: result.name,
                description: result.description,
                price: result.price,  
                stock: result.stock,
                ctegory: result.category
            })

    }catch(err){
        res.status(400).json({message: err.message})

    }
    
}

 const deleteProduct = async (req, res)=>{
    const {id}  = req.params 
    const sellerId = req.userId


    try{
        const existingProduct = await Product.findOne({id, sellerId})
        if (!existingProduct){
            return res.status(400).json({message: 'Delete your existing product only'})
        }

   const result= await Product.findByIdAndDelete(id)
       res.status(200).json({message: 'deleted successfuly', result,})

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

 const updateProduct = async (req, res)=>{
    const {id} = req.params 
    
    const {name, price, description, discount, stock}=req.body
    const seller = req.userId
    console.log(seller)

    try{
         const existingProduct = await Product.findOne({_id: id, seller: new mongoose.Types.ObjectId(seller)})
         console.log(existingProduct)
        if (!existingProduct){
            return res.status(400).json({message: 'Update your existing product only'})
        }

       const update = await Product.findByIdAndUpdate(
            id,
            {name, price, description, discount, stock },
            {new: true, runValidators: true}
        )
        if (!update){
            return res.status(400).json({message: 'Product not found'})
        }
        res.status(200).json({message: 'successfully Updated'})
        
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

module.exports = {updateProduct, deleteProduct, createProduct, getProduct, getProducts }