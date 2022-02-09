import Sensor from "../models/Sensor.js";
import moment from "moment";

export const home = async (req, res) => {
  const sensors = await Sensor.findOne().sort({ _id: -1 }).limit(1);

  console.log(sensors.temp);
  return res.send(sensors);
};

export const data = async (req, res) => {
  let sendArray = [];
  const datas = await Sensor.find().sort({ createdAt: "desc" });

  datas.forEach((element) => {
    let dataArray = [];
    dataArray.push(element.createdAt);
    dataArray.push(element.temp);
    dataArray.push(element.humidity);
    dataArray.push(element.cdc);
    dataArray.push(element.water);
    sendArray.push(dataArray);
  });

  const dataObject = { sendArray };
  console.log(sendArray);

  return res.send(dataObject);
};

export const startend = async (req, res) => {
  const firstData = await Sensor.findOne();
  const lastData = await Sensor.find().sort({ _id: -1 }).limit(1);

  const firstData_createdAt = firstData.createdAt;
  const lastData_createdAt = lastData[0].createdAt;

  const startendObject = {
    firstData_createdAt,
    lastData_createdAt,
  };

  res.send(startendObject);
};

export const getChartData = (req, res) => {
  const { startDate, endDate } = req.body;
  console.log(startDate, endDate);
};

export const sortData = async (req, res) => {
  const data = await Sensor.find({ createdAt: { $gt: "2022-02-05" } });
  console.log(data);
};
