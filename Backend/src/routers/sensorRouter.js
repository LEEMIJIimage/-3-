import express from "express";
import {
  home,
  data,
  startend,
  getChartData,
  lighta,
  lightb,
  lightc,
  lightd,
  lighte,
} from "../controllers/sensorController.js";

const sensorRouter = express.Router();

sensorRouter.get("/", home);
sensorRouter.get("/data", data);
sensorRouter.get("/startend", startend);
sensorRouter.post("/getChartData", getChartData);

sensorRouter.get("/lighta", lighta);
sensorRouter.get("/lightb", lightb);
sensorRouter.get("/lightc", lightc);
sensorRouter.get("/lightd", lightd);
sensorRouter.get("/lighte", lighte);



export default sensorRouter;
