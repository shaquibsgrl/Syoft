const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://aquib:shaquib@cluster0.i0acw.mongodb.net/?retryWrites=true&w=majority");

}

module.exports=connect