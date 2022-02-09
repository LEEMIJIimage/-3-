import React, { useState } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import {
  Wrapper,
  Button,
  Top,
  None,
  ModalBackground,
  Middle,
  ChartBox,
  Bottom,
  Illumination,
  IlluminationText,
  IlluminationNumber,
  Temperature,
} from "./MainStyle";
import Chart from "../Chart/Chart";

function Main() {
  const [chart, setChart] = useState(false);

  const onclickChartButton = () => {
    setChart(false);
  };

  return (
    <Wrapper chart={chart}>
      <Top>
        <BsFillCloudSunFill size={160} color="white" />
        <Illumination>
          <IlluminationText>illumination</IlluminationText>
          <IlluminationNumber>235</IlluminationNumber>
        </Illumination>
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
        <Temperature> 23 Current temperature</Temperature>
      </Middle>
      <Bottom>
        <ChartBox />
        <ChartBox />
        <ChartBox />
        <ChartBox />
      </Bottom>
      {chart ? <ModalBackground /> : <None />}
      {chart ? <Chart setChart={onclickChartButton} /> : <None />}
    </Wrapper>
  );
}

export default Main;
