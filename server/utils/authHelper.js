const  bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

 const passwordHashing=async (password)=>{

    const hashed=await bcrypt.hash(password, 10)
    return hashed
}
 const passwordUnhashing= async (plainPassword, hashedPassword)=>{
    const password =  await bcrypt.compare(plainPassword, hashedPassword)

    return password
}
 const jwtTokenGenerator = async (payload)=>{

    const token = await jwt.sign(payload, process.env.JWT_KEY, {expiresIn:'10d'})
    return token;
}

module.exports = {passwordHashing, passwordUnhashing, jwtTokenGenerator}
