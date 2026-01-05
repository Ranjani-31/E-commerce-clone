const product = require("../models/product");
const View = require("../models/productViews");

exports.getViewsByDate =async (req,res)=>{

    const {id} = req.params
    let {date} = req.body
    date = new Date(date).toISOString().slice(0,10)
    
    try{

         await View.updateOne(
            {productId: id, date},
            {$inc: {views:1}},
            {upsert:true}
        )

        
        res.status(200)

    }catch(err){
        res.status(500)

    }
}

exports.getViewsByWeekly = async(req,res)=>{

    const {id} = req.params 
    let {date, days} = req.body 
    const startDate=new Date(date)
     const endDate = date.setDate(date.getDate()+days)

    try{

        const views = await View.find(
            {productId: id, date: {$gte: startDate, $lte: endDate}}
        ).sort({date:1})

        res.status(200).json({
            message: "successfully fetched.",
             views: views.map(item=>({
                id: item.productId,
                date: item.date,
                views: item.views
                 
             }))
        })
    }catch(err){
        res.status(500).json({message: "something went wrong"})
    }
}