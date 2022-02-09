import express from "express";
import {
  home,
  data,
  startend,
  getChartData,
} from "../controllers/sensorController.js";

const sensorRouter = express.Router();

sensorRouter.get("/", home);
sensorRouter.get("/data", data);
sensorRouter.get("/startend", startend);
sensorRouter.post("/getChartData", getChartData);

export default sensorRouter;
