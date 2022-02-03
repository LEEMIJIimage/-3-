import mongoose from "mongoose";

const sensorSchema = mongoose.Schema({
  temp: Number,
  humidity: Number,
  liuminance: Number,
  soil_humidity: Number,
});

const Sensor = mongoose.Model("Sensor", sensorSchema);

export default Sensor;
