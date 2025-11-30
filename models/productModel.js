const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    name : {
        type : String,
        required : [true,"plaese enter priduct name"],
        trim : true,
        maxlength : [100, "product nme cant exceed 100 char"]
    },
    price : {
        type : Number,
        required : true,
        default : 0.0
    },
    description :{
        type : String,
        required :[true, " please enter desc"]
    },
    ratings:{
        type : String,
        default:0
    },
    images:[
        {
            filename:{
                type:String,
            }
        }
    ],
    category:{
        type:String,
        required:[true,"please enter cate"],
        enum:{
            values:[
                'Electronics',
                'Mobile Phpones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Spotrts',
                'Outdoors',
                'Home'

            ],
            message: "please select catagory"
        }
    },
    Seller:{
        type:String,
        required:[true, "Please enter product seller"]
    },
    stock:{
        type:Number,
        required:[true, "Please entern product stock"],
        maxLength:[20, "please stock cant exceed 20"],
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

let schema = mongoose.model('Product',productSchema)

module.exports = mongoose.model("Product", productSchema);
