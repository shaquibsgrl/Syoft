const mongoose=require("mongoose");

//user Schema

//step;1 creating Schema;

const productSchema= new mongoose.Schema({
    image:{type:String, required:true },
    title:{type:String,required:true},
    price:{type:String,required:true},
    rating:{type:Number,required:true},
    views:{type:Number,required:true}

},
{
    versionKey:false,
    timestamps:true,
})

//creating model
//step 2 creating a model

const Product=mongoose.model("product",productSchema);

module.exports=Product;