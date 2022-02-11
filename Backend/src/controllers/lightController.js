import { dataType } from "../getSensor.js";

export const off = (req, res) => {
  let data = "led";
  let light = "a";
  dataType(data, light);
  res.send("ok");
};
export const on_20 = (req, res) => {
  let data = "led";
  let light = "b";
  dataType(data, light);
  res.send("ok");
};
export const on_40 = (req, res) => {
  let data = "led";
  let light = "c";
  dataType(data, light);
  res.send("ok");
};
export const on_60 = (req, res) => {
  let data = "led";
  let light = "d";
  dataType(data, light);
  res.send("ok");
};
export const on_100 = (req, res) => {
  let data = "led";
  let light = "e";
  dataType(data, light);
  res.send("ok");
};
