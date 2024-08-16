import { connectDb } from "../../lib/db";
import { NextResponse } from "next/server";
import Navigation from "../../models/navigation/navigation";




export async function GET(req) {

   if (req.method=="GET") {try {
        await connectDb();
        const links = await Navigation.find(); // Replace with your actual links name
        // const products = await collection.find({}).toArray();

        return Response.json(links);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return Response.json({ error: 'Failed to fetch data' });
    }

}

}

export async function POST(request) {

    const data = await request.json()


    try {
        await connectDb()
        const newNavigation = new Navigation(data)
        // Save new document to MongoDB
        const savedNavigation = await newNavigation.save();

        res.status(201).json(savedNavigation);
    } catch (error) {
        console.error('Error fetching data from MongoDB:', error);
        return Response.json({ error: 'Failed to fetch data' });
    }

}