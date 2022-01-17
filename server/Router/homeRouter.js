import express from "express";
import { home, login } from "../Controller/homeController.js";
const homeRouter = express.Router();

homeRouter.get("/", home);
homeRouter.get("/login", login);

export default homeRouter;
