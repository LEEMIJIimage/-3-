import express from "express";
import react_view from "express-react-views";
import homeRouter from "./Router/homeRouter.js";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const PORT = 5000;

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", react_view.createEngine());

app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Hi! This is ${PORT} port!`));
