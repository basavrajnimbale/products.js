const products = [];
const path = require('path');
const rootDir = require('../util/path');                                              

module.exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

module.exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
};

module.exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};

module.exports.getContact = (req,res)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
};

module.exports.getSuccess = (req,res)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir,"views", "success.html"))
}; 