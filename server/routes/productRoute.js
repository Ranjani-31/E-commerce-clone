const route = require('express').Router()
const product=require('../controllers/productController')
const auth= require("../middleware/authMiddleware")

route.get("/products", product.getProducts);
route.get("/product/:id", product.getProduct);
route.post("/newProduct",auth, product.createProduct);
route.delete("/deleteProduct/:id", auth, product.deleteProduct);
route.put("/updateProduct/:id",auth, product.updateProduct);

module.exports = route 