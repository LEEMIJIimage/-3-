import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/smartfarm");

const db = mongoose.connection;

db.on("error", ()=>console.log("DB error",error))
db.once("open", ()=>console.log("DB is opened"))