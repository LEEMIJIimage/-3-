import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { Button, Top, ChartBox, Bottom, Middle } from "./MainStyle";

function Main() {
  return (
    <>
      <Top>
        <div>
          <BsFillCloudSunFill size={150} color="white" />
        </div>
        <Button> Chart</Button>
      </Top>
      <Middle />
      <Bottom>
        <ChartBox />
        <ChartBox />
        <ChartBox />
        <ChartBox />
      </Bottom>
    </>
  );
}

export default Main;
