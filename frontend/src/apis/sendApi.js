// eslint-disable-next-line no-unused-vars
import api from "./common";

export default {
  startEndDate: () => {
    return api.get("/startend");
  },
  getChartData: (req) => {
    return api.post("/getChartData", req);
  },
  Alldata: () => {
    return api.get("/");
  },
  lightOnE: () => {
    return api.get("/light/on_100");
  },
  lightOnD: () => {
    return api.get("/light/on_60");
  },
  lightOnC: () => {
    return api.get("/light/on_40");
  },
  lightOnB: () => {
    return api.get("/light/on_20");
  },
  lightOff: () => {
    return api.get("/light/off");
  },
};
