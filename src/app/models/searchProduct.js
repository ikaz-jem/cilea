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


const SearchProduct = mongoose.models.SearchProduct ||  mongoose.model('SearchProduct',productSchema)


 export default  SearchProduct
