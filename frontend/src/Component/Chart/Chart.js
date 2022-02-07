import React, { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { ChartWrap, GetOutModal, TitleWrap } from "./ChartStyle";
import sendApi from "../../apis/sendApi";

function Chart({ onclickGetOut }) {
  useEffect(async () => {
    const data = await sendApi.startEndDate();
    console.log("data", data);
  }, []);
  return (
    <ChartWrap>
      <rect x="3" y="3" fill="none" width="" height="162" rx="3" ry="3" />
      <TitleWrap>
        <GetOutModal onClick={onclickGetOut}><HiOutlineX color="white" size={40} /></GetOutModal>
      </TitleWrap>
    </ChartWrap>
  );
}

export default Chart;
