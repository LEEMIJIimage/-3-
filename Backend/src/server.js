import express from "express";
import cors from "cors";
import sensorRouter from "./routers/sensorRouter.js";
import "./db.js";
import "./getSensor.js";

const PORT = 4000;

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.use("/", sensorRouter);

app.listen(PORT, () => console.log(`PORT : ${PORT} is opened`));
