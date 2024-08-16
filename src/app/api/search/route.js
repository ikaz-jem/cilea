// import { products } from './data';
import { NextResponse } from 'next/server'
import { connectDb } from '../../lib/db'
import Product from '../../models/products/product';

export async function GET() {

    await connectDb();
  try {
    const res = await Product.aggregate().search({
    index: "search",
      text: {
        query:"Manfinity",
        // path:'title'
        path:  {
            wildcard: "*"
          }
      }
    });
    return Response.json(res);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return Response.json({ error: 'Failed to fetch data' });
  }



}
