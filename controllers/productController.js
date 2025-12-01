const Product=require('../models/productModel');


//get product - /api/v1/product
exports.getProducts = async(req,res,next)=>{
    const products=await Product.find();
    res.status(200).json({
        success :true,
        count:products.length ,
        message:"this route will all the product database"
    })
}

//Create Product - /api/v1/product/new
exports.newProduct = async(req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product 
    })
}

exports.getSingleProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
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

//Update Product - /api/v1/product:id
exports.updateProduct = async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
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
    res.status(200).json({
        success:true,
        product
    })
}

exports.deleteProduct = async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:"product not found"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"product deleted"
    })
}