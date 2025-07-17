const route = require('express').Router()
const user=require('../controllers/userController')

route.post('/register', user.register)
route.post('/login', user.login)

module.exports=route