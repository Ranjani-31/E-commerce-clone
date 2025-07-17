const mongoose=require("mongoose");
require("dotenv").config()

const URI=process.env.URI 

const connectDb= async()=>{
    try{
       await mongoose.connect(URI)
        console.log("DB Connected successfully")
    }catch(err){
        console.log(`DB Error: ${err}`);
        process.exit(1)
    }
}

module.exports = connectDb