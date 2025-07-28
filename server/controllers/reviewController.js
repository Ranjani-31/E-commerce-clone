const Review =  require('../models/review')
 
 const addReview= async (req, res)=> {
    
    const userId = req.userId 
    const {productId, rating, comment} = req.body

    try{
 const newReview = new Review({
        userId,
        productId,
        comment,
        rating
    })

    const result = newReview.save()
    res.status(400).json({
        _id: result._id,
        comment: result.comment,
        rating: result.rating,
        createdat: result.createdat
    })

    }catch(err){
        res.status(400).json({message: err.message})
    }
   

}

 const getReviews = async (req,res)=>{
    const {productId} = req.params

    try{
            const reviews = await Review.find({productId})
            
            res.status(200).json({
                result: reviews.map(item=>({
                    _id: item._id,
                    comment: item.comment,
                    rating: item.rating
                }))
            })

    }catch(err){
        res.status(400).json({message: err.message})
  }
}



module.exports = {addReview, getReviews}