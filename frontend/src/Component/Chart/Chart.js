import React, { useEffect } from "react";
import { ChartWrap, GetOutModal } from "./ChartStyle";
import sendApi from "../../apis/sendApi";

function Chart() {
  useEffect(async () => {
    const data = await sendApi.startEndDate();
    console.log("data", data);
  }, []);
  return (
    <ChartWrap>
      <GetOutModal>우와</GetOutModal>
    </ChartWrap>
  );
}

export default Chart;
