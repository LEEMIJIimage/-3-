import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
    createdAt : {type : Date, default: Date.now},
    temp : Number,
    humidity : Number,
    cdc: Number,
    water : Number,
});


const Sensor = mongoose.model("Sensor", sensorSchema);

export default Sensor
