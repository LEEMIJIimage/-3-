// eslint-disable-next-line no-unused-vars
import api from "./common";

export default {
  startEndDate: () => {
    return api.get("/startend");
  },
  getChartdata: (req) => {
    return api.post("/startend", req);
  },
  Alldata: () => {
    return api.get("/");
  },
  lightOn: () => {
    return api.get("/lightOn");
  },
  lightOff: () => {
    return api.get("/lightOff");
  },
};
