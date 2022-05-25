 const {Schema, model} = require('mongoose')

 const productsSchema = new Schema({
     title: {type: String, required: false},
     price: {type: Number, required: false},
     discount: {type: Number, required: false},
     image: {type: String, required: false},
     category: {type: String, required: false},

     brand: {type: String, required: false},
     model: {type: String, required: false},
     colour: {type: String, required: false},
     so: {type: String, required: false},
     ram: {type: String, required: false},
     storage: {type: String, required: false},

     shipping: {type: Number, required: false},

 },{
     timestamps: true,
     versionKey: false
 })

module.exports =  model('Product', productsSchema);