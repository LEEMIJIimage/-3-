import React, { useState, useEffect } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { IoWaterOutline } from "react-icons/io5";
import { FaTemperatureLow } from "react-icons/fa";
import {
  Wrapper,
  Button,
  Top,
  Topleft,
  None,
  ModalBackground,
  Middle,
  ChartBox,
  Bottom,
  Illumination,
  IlluminationText,
  IlluminationNumber,
  TemperatureNuber,
  TemperatureText,
  MiddleContent,
  MiddleWapContent,
  HumidityNumber,
  Button2,
  ChartBox2,
} from "./MainStyle";
import Chart from "../Chart/ChartPage";
import sendApi from "../../apis/sendApi";

function Main() {
  const [chart, setChart] = useState(false);

  const onclickChartButton = () => {
    setChart(false);
  };
  const [Tep, setTep] = useState();
  const [Humidity, setHumidity] = useState();
  const [Cdc, setCdc] = useState();
  const [Water, setWater] = useState();

  useEffect(async () => {
    const { data } = await sendApi.Alldata();
    setTep(data.temp);
    setCdc(data.cdc);
    setHumidity(data.humidity);
    setWater(data.water);
  }, []);

  const onClickOn = async () => {
    const { data } = await sendApi.lightOn();
    alert(data);
  };
  const onClickOff = async () => {
    const { data } = await sendApi.lightOff();
    alert(data);
  };

  return (
    <Wrapper chart={chart}>
      <Top>
        <Topleft>
          <BsFillCloudSunFill size={160} color="white" />
          <Illumination>
            <IlluminationText>illumination</IlluminationText>
            <IlluminationNumber>{Cdc}</IlluminationNumber>
          </Illumination>
        </Topleft>
        <Button
          onClick={() => {
            setChart(true);
          }}
        >
          {" "}
          Chart
        </Button>
      </Top>
      <Middle>
        <MiddleWapContent>
          <MiddleContent>
            <TemperatureNuber>
              {" "}
              {Tep} <FaTemperatureLow />
            </TemperatureNuber>
            <TemperatureText>
              {" "}
              Current
              <br />
              Temperatur{" "}
            </TemperatureText>
          </MiddleContent>
        </MiddleWapContent>
      </Middle>

      <Bottom>
        <ChartBox>
          <IoWaterOutline size={70} color="black" />
          <HumidityNumber>{Humidity}</HumidityNumber>
        </ChartBox>
        <ChartBox>{Water}</ChartBox>
        <ChartBox2>
          <Button2 onClick={onClickOff}>Turn off the light.</Button2>{" "}
          <Button2 onClick={onClickOn}>Turn on the light.</Button2>{" "}
        </ChartBox2>
      </Bottom>
      {chart ? <ModalBackground /> : <None />}
      {chart ? <Chart onclickGetOut={onclickChartButton} /> : <None />}
    </Wrapper>
  );
}

export default Main;
