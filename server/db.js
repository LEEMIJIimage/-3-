import mongoose from "mongoose";

mongoose.connect("주소값");

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("DB is opened!"));
