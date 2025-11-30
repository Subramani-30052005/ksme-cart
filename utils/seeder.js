const products = require('../data/product.json');
const Product = require('../models/productModel');
const dotenv = require("dotenv");
const connectDatabase = require('../config/database');
const path = require("path");

// dotenv.config({ path:("/backend/config/config.env") });
dotenv.config({ path: path.join(__dirname, "../config/config.env") });

connectDatabase();

const seedProducts = async(req,res) =>{
    try{
    await Product.deleteMany();
    console.log("all products removed")
    await product.insertMany(products);
    console.log("all products addeddd!")
    }catch(error){
        console.log("error",error.message);
    }
    process.exit();
}

seedProducts();