const express=require("express");
require("dotenv").config()
const connectDb=require("./config/db")
const cors = require("cors");
const helmet = require("helmet")
const {globalRateLimiter}=require("./middleware/rateLimiter")

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", 'PUT', 'DELETE', 'OPTIONS', 'POST'],
    credentials: true 
}));

app.use(globalRateLimiter)

app.use(helmet())
connectDb();

app.use(express.json());
app.use("/user", require("./routes/userRoute"))
app.listen(process.env.PORT, ()=>{
    console.log("Server has been started...");
})

module.exports=app