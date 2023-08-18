let express= require("express");
let router = express.Router();
const productController = require('../controllers/products')
const path = require("path");



router.get("/shop",(req,res)=>{
    res.send("<h1>Welcome to the shop</h1>")
})

router.get("/contactus", productController.getContact);

router.post("/success", productController.getSuccess);

module.exports = router;