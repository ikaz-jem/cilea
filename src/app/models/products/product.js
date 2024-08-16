import mongoose ,{Schema} from "mongoose";


const productSchema = new Schema (
    {
        id:{
            type:Number,
            unique:true,
        },
        title: String ,
        image: String ,
        price: Number ,
        promo:Schema.Types.Mixed
        
    },
    {
     timestamps:true
    }
)


const productSchema2 = new Schema (
    {
        id:{
            type:Number,
            unique:true,
        },
        title: String ,
        description:String,
        image: String ,
        category:String,
        recommended:{ type: Boolean, index: true },
        featured:{ type: Boolean, index: true },
        price: Number ,
        size:[String],
        status:String,
        stock:Number,
        tags:[String],
        promo:Schema.Types.Mixed,
        reviews:[{type:mongoose.Types.ObjectId,ref:'productReviews'}]
        
    },
    {
     timestamps:true
    }
)

const productVarientsSchema = new Schema (
    {
        id: mongoose.Types.ObjectId,
        images:[String],
        size:[String],
    }
)

const productReviews = new Schema ({
    id:mongoose.Types.ObjectId,
    rating:Number,
    comments:[String]

})

const ProductComents = new Schema(
    {
        id:mongoose.Types.ObjectId,
        
    }
)


const Product = mongoose.models.Product ||  mongoose.model('Product',productSchema)
const ProductVarients = mongoose.models.Product || mongoose.model('ProductVarients',productVarientsSchema)
const ProductReviews = mongoose.models.Product || mongoose.model('ProductReviews',productReviews)

 
 export  {Product,ProductVarients,ProductReviews}


