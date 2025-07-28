

const Category = require('../models/category')

 const addCategory = async (req, res)=>{
 
    
    const {category} = req.body 

    try{
        const newCategoty = new Category({
            category,
        })

        const result = await newCategoty.save()
        res.status(400).json({result: {
            _id: result._id,
            category: result.category,
        }})
    }catch(err){
        res.status(400).josn({message: err.message})
    }
}

 const getCategories = async (req, res)=>{

    try{
        const result = await Category.find()
        res.status(400).json({
            items: result.map(item=>({
                _id: result._id,
                category: result.category
            }))
        })


    }catch(err){
        res.status(400).json({
            message: err.message 
        })
    }
}
module.exports = {addCategory, getCategories}