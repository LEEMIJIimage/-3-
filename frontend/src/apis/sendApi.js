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
    return api.get("/lighte");
  },
  lightOnD: () => {
    return api.get("/lightd");
  },
  lightOnC: () => {
    return api.get("/lightc");
  },
  lightOnB: () => {
    return api.get("/lightb");
  },
  lightOff: () => {
    return api.get("/lighta");
  },
};
