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
        <div>
          <BsFillCloudSunFill size={150} color="white" />
        </div>
        <Button
          onClick={() => {
            setChart(true);
          }}
        >
          {" "}
          Chart
        </Button>
      </Top>
      <Middle />
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
