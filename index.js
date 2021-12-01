//import the express package
import express, { response } from "express";
import dotenv from "dotenv";
dotenv.config();
//creating an instace of express
const app=express();

//import mongoose
import mongoose from "mongoose";
// using this port for our server
const port=5000;

// create a path  to handle GET request o the index route
app.get("/", (request, response)=>{
    response.send("Hello World");
});

mongoose.connect(process.env.mongo_DB_CONTRING, (error)=>{
   
if (error) {
    return console.log ("couldn't connect to MongoDB");
}
else{
    console.log("Connection to MongoDB was successful");
}


});
//listen to the incoming request on this port
app.listen(port, ()=>console.log(`server is  running and active on: ${port}`)
);