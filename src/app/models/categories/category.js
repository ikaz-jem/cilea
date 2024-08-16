import mongoose,{Schema} from "mongoose";

const categorySchema = new Schema (
    {
        id: {
            type:Number,
            unique:true,
        },
        name:String,
        image:String,
    },
    {
        timestamps:true
    }
)

const Category = mongoose.models.Category || mongoose.model('Category',categorySchema)

export default Category