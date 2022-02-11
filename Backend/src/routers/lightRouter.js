import express from "express";
import {
  off,
  on_20,
  on_40,
  on_60,
  on_100,
} from "../controllers/lightController.js";
const lightRouter = express.Router();

lightRouter.get("/off", off);
lightRouter.get("/on_20", on_20);
lightRouter.get("/on_40", on_40);
lightRouter.get("/on_60", on_60);
lightRouter.get("/on_100", on_100);

export default lightRouter;
