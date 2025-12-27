const express=require("express");
require("dotenv").config()
const connectDb=require("./config/db")

// const {globalRateLimiter}=require("./middleware/rateLimiter")


const app = express();
// app.use(globalRateLimiter)
connectDb();

app.use(express.json());
app.use("/user", require("./routes/userRoute"))
app.use("/product", require("./routes/productRoute"))
console.log(process.env.PORT)
app.listen(process.env.PORT, ()=>{ 
    console.log("Server has been started...");
})
 
module.exports=app 