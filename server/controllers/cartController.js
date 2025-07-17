
const Cart=require('../models/cartItems')

// get all cart products 
export const cartProducts=async (req,res)=>{
    const id = req.userId

    try{
    const result = await Cart.find({userId: id}).populate('Product')

    res.status(200).json({
        cartItems : result.map(item=>({
            _id: item._id,
            name: item.productId?.name,
            selingPrice: item.productId?.price,
            discount: item.productId.discount,
            displayPercent: (item.productId?.discount / item.productId?.price)*100,
            displayPrice: item.productId?.price-item.productId?.discount,
            description: item.productId.description,
            stock: item.productId.stock
            
        })),
        
    })

    }catch(err){
        res.status(400).json({message: err.message})
    }


}

export const newProduct = async (req,res)=>{

    const {productId,quantity}=req.body
    const userId = req.userId

    try{

        const exixtingProduct = await Cart.findOne({userId, productId})
        if(exixtingProduct){
            return res.status(400).json({message: 'Product already in cart'})
        }

        const newProduct = new Cart({
            userId, 
            productId,
            quantity
        })

        const newCart = await newProduct.save()
        const item =await  Cart.findById(newCart._id).populate('Product')
        res.status(200).json({
            cartItem : {
            _id: item._id,
            name: item.productId?.name,
            selingPrice: item.productId?.price,
            discount: item.productId.discount,
            displayPercent: item.productId?.price>0 ? (item.productId?.discount / item.productId?.price)*100 : 0,
            displayPrice: item.productId?.price-item.productId?.discount,
            description: item.productId.description,
            stock: item.productId.stock
        
        }})

    }catch(err){
        res.status(400).json({message: err.message})
    }
}

export const removeItem = async  (req, res)=>{
    const {id} = req.params
    try{
        await Cart.findByIdAndDelete(id)

        res.status(200).json({message: 'successfully deleted'}) 
    }catch(err){
        res.status(400).json({message: err.message}) 
    }
}
