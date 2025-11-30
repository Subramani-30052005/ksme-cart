const products = require('../data/product.json');
const Product = require('../models/productModel');
const dotenv = require("dotenv");
// const connectDatabase = require('../config/database');
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");



// dotenv.config({ path:("/backend/config/config.env") });
dotenv.config({ path: path.join(__dirname, "../config/config.env") });

// connectDatabase();
mongoose
  .connect(process.env.DB_LOCAL_URI)
  .then(() => console.log("Seeder DB connected"))
  .catch((err) => console.log("Seeder DB error:", err));

const productsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/product.json"), "utf-8")
);

const seedProducts = async(req,res) =>{
    try{
    await Product.deleteMany();
    console.log("all products removed")
    await products.insertMany(productsData);
    console.log("all products addeddd!")
    }catch(error){
        console.log("error",error.message);
    }
    process.exit();
}

seedProducts();