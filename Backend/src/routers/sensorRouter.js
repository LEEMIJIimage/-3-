import express from "express";
import {
  home,
  data,
  startend,
  getChartData,
  lightOn,
  lightOff,
} from "../controllers/sensorController.js";

const sensorRouter = express.Router();

sensorRouter.get("/", home);
sensorRouter.get("/data", data);
sensorRouter.get("/startend", startend);
sensorRouter.post("/getChartData", getChartData);
sensorRouter.get("/lightOn", lightOn);
sensorRouter.get("/lightOff", lightOff);

export default sensorRouter;
