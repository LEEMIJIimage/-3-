import express from "express";
import { home } from "../controllers/sensorController.js";

const sensorRouter = express.Router();

sensorRouter.get("/", home);

export default sensorRouter;