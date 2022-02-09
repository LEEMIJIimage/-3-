/* eslint-disable no-sequences */
/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./react-datepicker.css";
import { HiOutlineX } from "react-icons/hi";
import { Chart } from "react-google-charts";
import {
  ChartWrap,
  GetOutModal,
  TitleWrap,
  SVG,
  Rect,
  TitleText,
  Middle,
  DateButton,
  Content,
  None
} from "./ChartStyle";
import sendApi from "../../apis/sendApi";

function ChartPage({ onclickGetOut }) {
  const [receiveStartDate, setReceiveStartDate] = useState(new Date());
  const [receiveEndDate, setReceiveEndDate] = useState(new Date());
  const [receiveChart, setReceiveChart] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(async () => {
    const { data } = await sendApi.startEndDate();
    setReceiveStartDate(new Date(data.firstData_createdAt));
    setReceiveEndDate(new Date(data.lastData_createdAt));
    setStartDate(new Date(data.firstData_createdAt));
    setEndDate(new Date(data.lastData_createdAt));

    console.log(receiveChart);
  }, [receiveChart]);

  const onClickDateSendBtn = async () => {
    console.log("startDate", startDate, "endDate", endDate);
    const { data } = await sendApi.getChartData({ startDate: startDate, endDate: endDate });
    setReceiveChart([["date", "temp", "humidity", "cdc", "Soil moisture"]].concat(data.sendArray));
  };

  const LineChartOptions = {
    hAxis: {
      title: "Time",
    },
    series: {
      1: { curveType: "function" },
    },
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
          selected={startDate} // 날짜 state
          onChange={(date) => setStartDate(date)} // 날짜 설정 콜백 함수
          minDate={receiveStartDate}
          maxDate={receiveEndDate}
        />
        ~
        <DatePicker
          selected={endDate} // 날짜 state
          onChange={(date) => setEndDate(date)} // 날짜 설정 콜백 함수
          minDate={receiveStartDate}
          maxDate={receiveEndDate}
        />
        <DateButton onClick={onClickDateSendBtn}>검색</DateButton>
      </Middle>
      <Content>
        {receiveChart.length ? <Chart
          chartType="LineChart"
          data={receiveChart}
          width="100%"
          height="500px"
          options={LineChartOptions}
          legendToggle
        /> : <None />}
      </Content>
    </ChartWrap>
  );
}

export default ChartPage;
