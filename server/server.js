import express from "express";
import homeRouter from "./Router/homeRouter.js";

const PORT = 4000;

const app = express();

app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Hi! This is ${PORT} port!`));
