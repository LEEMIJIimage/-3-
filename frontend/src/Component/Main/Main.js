import React, { useState, useEffect } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
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
} from "./MainStyle";
import Chart from "../Chart/Chart";
import sendApi from "../../apis/sendApi";

function Main() {
  const [chart, setChart] = useState(false);

  const onclickChartButton = () => {
    setChart(false);
  };

  useEffect(() => {
    const { data } = sendApi.startEndDate();
    console.log("data", data);
  }, []);

  return (
    <Wrapper chart={chart}>
      <Top>
        <Topleft>
          <BsFillCloudSunFill size={160} color="white" />
          <Illumination>
            <IlluminationText>illumination</IlluminationText>
            <IlluminationNumber>265</IlluminationNumber>
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
            <TemperatureNuber> 23 </TemperatureNuber>
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
        <ChartBox />
        <ChartBox />
        <ChartBox />
        <ChartBox />
      </Bottom>
      {chart ? <ModalBackground /> : <None />}
      {chart ? <Chart onclickGetOut={onclickChartButton} /> : <None />}
    </Wrapper>
  );
}

export default Main;
