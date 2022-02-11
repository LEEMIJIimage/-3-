import express from "express";
import cors from "cors";
import "./db.js";
import "./getSensor.js";
import sensorRouter from "./routers/sensorRouter.js";
import lightRouter from "./routers/lightRouter.js";

const PORT = 4000;

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use("/", sensorRouter);
app.use("/light", lightRouter);

app.listen(PORT, () => console.log(`PORT : ${PORT} is opened`));
