const express=require("express");

const Product=require("../model/product.model")

const app=express();


app.get("/",async(req,res)=>{
    try {
        const products=await Product.find().lean().exec();
        return res.status(200).send({products:products})
    } catch (err) {
        return res.status(500).send({necessary:"Something went wrong ... try again later"})
    }
    });
    
    
    
    app.post("/",async(req,res)=>{
        try {
            const product=await Product.create(req.body);
            return res.status(201).send({product:product})
        } catch (err) {
            return res.status(500).send({message:"Message:err.message"})
        }
        });
    
    
    
    
        app.get("/:id",async(req,res)=>{
            try {
                const product=await Product.findById(req.params.id);
                return res.status(201).send({product:product})
            } catch (err) {
                return res.status(500).send({message:"Message:err.message"})
            }
            });
    
    
    
            app.patch("/:id",async(req,res)=>{
                try {
                    const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
                    return res.status(200).send(product)
                } catch (err) {
                    return res.status(500).send({message:"Message:err.message"})
                }
                });
    
    
                app.delete("/:id",async(req,res)=>{
                    try {
                        const product=await Product.findByIdAndDelete(req.params.id);
                        return res.status(200).send(product)
                    } catch (err) {
                        return res.status(500).send({message:"Message:err.message"})
                    }
                    });
    
    
module.exports=app;