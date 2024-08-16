import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';


const uri = 'mongodb+srv://echchebabzakariae:WAKIRINZO9*@cilea.xxyhaya.mongodb.net/cilea?retryWrites=true&w=majority&appName=Cilea'; // Replace with your actual MongoDB connection string

// const client = new MongoClient(uri, {
//   useNewUrlParser: true, // Required for parsing connection strings
//   // Use any other required options here

// });

// export async function connectDb() {
//   try {
//     await client.connect();
//     console.log("Connected successfully to MongoDB server");
//     const db = client.db(); // Optionally, specify database name here
//     return db; // Return the database object
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//     throw err; // Throw the error for handling in your application
//   }
// }

export async function connectDb (){
  try {
    await mongoose.connect(uri,{
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    },{ autoIndex: false })
    console.log('databas connected')
  }
  catch(err) {
console.log(err.message)
  }


}