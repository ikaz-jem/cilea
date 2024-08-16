// import { products } from './data';
import { NextResponse } from 'next/server'
import { connectDb } from '../../lib/db'
import {Product} from '../../models/products/product'

export async function GET() {

  try {
    await connectDb();
    const collection = await Product.find(); // Replace with your actual collection name
    // const products = await collection.find({}).toArray();

    return Response.json(collection);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return Response.json({ error: 'Failed to fetch data' });
  }



}


export async function POST(request) {
  // const {title,image,id,promo,price} = await request.json()
  const products = await request.json()
  
  await connectDb()
  try {
    await productModel.insertMany(products)
    // await productModel.insertMany({id,title,image,price,promo})
    return NextResponse.json(({ message: 'product added' }))
  } catch (err) {
    return NextResponse.json(({ message: 'Error' }))
  }
  
  return new Response ('req', 
    {
      headers:{
        "content-type":"application/json"
      },
      status:201
    }
  )
  // const data = await request.json()
  // return Response('hello')
 
}