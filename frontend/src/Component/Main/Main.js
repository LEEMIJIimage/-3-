/* eslint-disable no-case-declarations */
import React, { useState, useEffect } from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa";
import { GiPlantWatering } from "react-icons/gi";
import {
  Wrapper,
  Button,
  Top,
  Topleft,
  None,
  ModalBackground,
  Middle,
  ChartBox,
  MiniChartBox1,
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
  OnButton,
  ChartBox3,
  ChartBox2,
  HumidityText,
  WateringNumber,
  MiniChartBox2,
  WateringText,
  OnLightLevelDiv
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

  const onClickOn = async (v) => {
    switch (v) {
      case "e":
        const { data } = await sendApi.lightOnE();
        alert(`Light 100% ${data}`);
        break;
      case "d":
        const dataD = await sendApi.lightOnD();
        alert(`Light 60% ${dataD.data}`);
        break;
      case "c":
        const dataC = await sendApi.lightOnC();
        alert(`Light 40% ${dataC.data}`);
        break;
      case "b":
        const dataB = await sendApi.lightOnB();
        alert(`Light 20% ${dataB.data}`);
        break;
      default:
        break;
    }
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
            <TemperatureNuber> {Tep}</TemperatureNuber>
            <FaTemperatureLow size={60} margin- />
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
          <MiniChartBox1>
            <HumidityNumber>{Humidity}</HumidityNumber>
            <WiHumidity size={70} color="black" />
          </MiniChartBox1>
          <HumidityText>Humidity</HumidityText>
        </ChartBox>

        <ChartBox3>
          <OnLightLevelDiv>
            <OnButton check="top" onClick={() => onClickOn("e")}>Light 100%</OnButton>{" "}
            <OnButton onClick={() => onClickOn("d")}>Light 60%</OnButton>{" "}
            <OnButton onClick={() => onClickOn("c")}>Light 40%</OnButton>{" "}
            <OnButton check="bottom" onClick={() => onClickOn("b")}>Light 20%</OnButton>{" "}
          </OnLightLevelDiv>
          <Button2 onClick={onClickOff}>Turn off the light.</Button2>{" "}
        </ChartBox3>

        <ChartBox2>
          <MiniChartBox2>
            <WateringNumber>{Water}</WateringNumber>
            <GiPlantWatering size={70} />
          </MiniChartBox2>
          <WateringText>Soil moisture.</WateringText>
        </ChartBox2>

      </Bottom>
      {chart ? <ModalBackground /> : <None />}
      {chart ? <Chart onclickGetOut={onclickChartButton} /> : <None />}
    </Wrapper>
  );
}

export default Main;
