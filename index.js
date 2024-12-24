import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const db = process.env.mongoUrl;
const PORT = process.env.PORT;

mongoose.connect(db).then(
    ()=>{
        console.log('connected successfully');        
    }
).catch((error)=>{
    console.log('error');    
});


app.listen(PORT, ()=>{
    console.log('server is ruming on',PORT);
});

app.use("/api", route);