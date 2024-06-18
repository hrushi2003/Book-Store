export const PORT = 3000;
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:'sample.env'});
const URI = "mongodb+srv://hrushikesh2003:hrushi0406@cluster0.vjepk9n.mongodb.net/books-collection?retryWrites=true&w=majority";
export const connect = async () => {
    try{
        await mongoose.connect(URI,{useNewUrlParser:true});
        const db = mongoose.connection;
        db.on('connected',()=>{
            console.log("Connected to MongoDB");
        });
        db.on('error',() => {
            console.log("Error connecting to MongoDB")
        }); 
    }catch (err){
        console.log(err);
    }
}
