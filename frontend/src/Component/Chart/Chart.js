import React, { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { ChartWrap, GetOutModal, TitleWrap, SVG, Rect } from "./ChartStyle";
import sendApi from "../../apis/sendApi";

function Chart({ onclickGetOut }) {
  useEffect(async () => {
    const data = await sendApi.startEndDate();
    console.log("data", data);
  }, []);
  return (
    <ChartWrap>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
      >
        <Rect
          x="0"
          y="0"
          fill="none"
          width="100%"
          height="100%"
          rx="3"
          ry="3"
        />
      </SVG>
      <TitleWrap>
        <GetOutModal onClick={onclickGetOut}>
          <HiOutlineX color="white" size={40} />
        </GetOutModal>
      </TitleWrap>
    </ChartWrap>
  );
}

export default Chart;
