import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./react-datepicker.css";
import { HiOutlineX } from "react-icons/hi";
import {
  ChartWrap,
  GetOutModal,
  TitleWrap,
  SVG,
  Rect,
  TitleText,
  Middle,
  DateButton,
} from "./ChartStyle";
import sendApi from "../../apis/sendApi";

function Chart({ onclickGetOut }) {
  const [receiveStartDate, setReceiveStartDate] = useState(new Date());
  const [receiveEndDate, setReceiveEndDate] = useState(new Date());
  // const [receiveChart, setReceiveChart] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(async () => {
    const { data } = await sendApi.startEndDate();
    console.log("data", data);
    setReceiveStartDate(new Date(data.firstData_createdAt));
    setReceiveEndDate(new Date(data.lastData_createdAt));

    console.log(receiveStartDate, receiveEndDate);
  }, []);

  const onClickDateSendBtn = async () => {
    const { data } = await sendApi.startEndDate({ startDate, endDate });
    console.log("startDate", startDate, "endDate", endDate);
    console.log("data", data);
  };

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
        <TitleText>Chart</TitleText>
        <GetOutModal onClick={onclickGetOut}>
          <HiOutlineX color="white" size={32} />
        </GetOutModal>
      </TitleWrap>
      <Middle>
        <DatePicker
          selected={receiveStartDate} // 날짜 state
          onChange={(date) => setStartDate(date)} // 날짜 설정 콜백 함수
          minDate={receiveStartDate}
          maxDate={receiveEndDate}
        />
        ~
        <DatePicker
          selected={receiveEndDate} // 날짜 state
          onChange={(date) => setEndDate(date)} // 날짜 설정 콜백 함수
          minDate={receiveStartDate}
          maxDate={receiveEndDate}
        />
        <DateButton onClick={onClickDateSendBtn}>검색</DateButton>
      </Middle>
    </ChartWrap>
  );
}

export default Chart;
