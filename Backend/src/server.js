import express from "express"
import sensorRouter from "./routers/sensorRouter.js";
import "./db.js"
import "./getSensor.js"

const PORT = 4000;

const app = express();

app.use("/", sensorRouter)

app.listen(PORT, ()=>console.log(`PORT : ${PORT} is opened`))
