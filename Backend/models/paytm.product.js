const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
brand:String,
name:String,
price:String,
strike_price:String,
discount:String,
image_url:String,

})

const ProductModel=mongoose.model("product",productSchema);

module.exports={ProductModel}