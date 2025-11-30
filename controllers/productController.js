const Product=require('../models/productModel');


//get product
exports.getProducts = async(req,res,next)=>{
    const products=await Product.find();
    res.status(200).json({
        success :true,
        count:products.length ,
        message:"this route will all the product database"
    })
}

exports.newProduct = async(req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product 
    })
}

exports.getSingleProduct = async(req,res,next)=>{
    const Product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"product not found"
        })
    }
    res.status(201).json({
        success
    })
}

exports.updateProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"product not found"
        })
    }
    
    product = await  Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    res.status(201).json({
        success
    })
}