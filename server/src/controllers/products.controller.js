// const hello = (req, res) => res.send('helloko ');

const productCtrl = {};

const Product = require('../models/Product');


productCtrl.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

productCtrl.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({message: "producto creado"});
}

productCtrl.getProduct = async (req, res) => {
    console.log(req.params.id);
    const product =  await Product.findById(req.params.id);
    res.send(product)

}

productCtrl.editProduct = async (req, res) => {
    console.log(req.params.id);
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send({status: "product update"})
}

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({status: "deleted product"})
}




module.exports = productCtrl;

