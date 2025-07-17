const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth= (req, res, next)=>{

    const authHeader=req.headers['authorization']
console.log(authHeader)
   if (!authHeader || !authHeader.startsWith('Bearer ')) {
  throw new Error('No token provided');
}

const jwtToken = authHeader.split(' ')[1];
    jwt.verify( jwtToken, process.env.JWT_KEY, (error, payload)=>{
        if (error){
            throw new Error("Invalid Token")
        }else{
            req.userId=payload.userId 
            next() 
 c       }
    })

}
module.exports= auth