import express from "express";
import cors from "cors";
import homeRouter from "./Router/homeRouter.js";
import "./db.js";

const PORT = 4000;

const app = express();

const corsOptions = {
  origin: "localhost:3000",
};

app.use(cors(corsOptions));

app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Hi! This is ${PORT} port!`));
