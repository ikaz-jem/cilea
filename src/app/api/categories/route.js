import { connectDb } from "../../lib/db";
import Category from "../../models/categories/category";
import { NextResponse } from "next/server";




export async function GET() {

    try {
      await connectDb();
      const collection = await Category.find(); // Replace with your actual collection name
      // const products = await collection.find({}).toArray();
  
      return Response.json(collection);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      return Response.json({ error: 'Failed to fetch data' });
    }
  
  
  
  }
  

export async function POST (request){
const categories = await request.json()

    await connectDb()
try {
        await Category.insertMany(categories)
        return NextResponse.json(({ message: 'categories added' }))

}  catch (err) {
    return NextResponse.json(({ message: 'Error' }))
  }

}