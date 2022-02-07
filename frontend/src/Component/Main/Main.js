import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { Button, Top } from "./MainStyle";

function Main() {
  return (
    <Top>
      <div>
        <BsFillCloudSunFill size={150} color="white" />
      </div>
      <Button> Chart</Button>
    </Top>
  );
}

export default Main;
