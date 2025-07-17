

const User = require("../models/user")
const validator = require('../utils/passwordValidator')
const auth = require('../utils/authHelper')
const {user}= require("../constants/roles")


 const register =async (req, res)=>{
  console.log(req.body)

   const {email, password, name,phone, role=user.CUSTOMER}=req.body
   try{
        validator(password, {min:8, max:15})

        const encrptPassword =await auth.passwordHashing(password)

        const newUser=new User({
            name,
            password: encrptPassword,
            email,
            phone,
            role
        })
        await newUser.save()
        res.status(200).json({
            message: 'Successfully registered'
        })


   }catch(err){
    res.status(400).json({message: err.message})
   }
}

 const login =  (req, res)=>{
     
    const {password, email}=req.body 

    User.findOne({email,})
    .then(async result=>{
         
      const encryptPassword = await auth.passwordUnhashing(password,result.password)
      if (encryptPassword){
        const payload={
            userId : result._id
        }
        const jwt=await auth.jwtTokenGenerator(payload)
        res.status(200).json({jwt,})
      }
    })
    .catch(err=>{
       return res.status(400).json({meassage:err.message});
    })
    
}

module.exports = {register, login}