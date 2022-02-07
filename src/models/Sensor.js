import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  createdAt: { type: String, default: Date.now() },
  temp: Number,
  humidity: Number,
  liuminance: Number,
  soil_humidity: Number,
});

const Sensor = mongoose.model("Sensor", sensorSchema);

export default Sensor;
