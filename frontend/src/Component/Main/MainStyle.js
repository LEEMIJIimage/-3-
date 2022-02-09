/* eslint-disable consistent-return */
import styled from "styled-components";

const Wrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  height: 180px;
`;
const Topleft = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;
`;
const Illumination = styled.div`
  text-align: center;
  margin-left: 28px;
  margin-top: 26px;
`;
const IlluminationText = styled.p`
  font-size: 15pt;
  color: white;
  margin-bottom: 0%;
`;
const IlluminationNumber = styled.p`
  font-size: 40pt;
  color: white;
  padding-top: 0%;
  margin-top: 0%;
  text-decoration-line: underline;
  text-decoration-style: double;
  text-underline-offset: 0.2cm;
  text-decoration-thickness: 2px;
`;
const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #a6827e;
  background-color: transparent;
  border-radius: 3px;
  border: 4px solid white;
  height: min-content;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 30px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #4d3534;
  margin-right: 30px;
  margin-top: 25px;
  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
`;

const Middle = styled.div`
  width: 700px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin-left: 27%;
  /* text-decoration-line: underline; */
  /* text-decoration-style: double;
  text-underline-offset: 0.4cm;
  text-decoration-thickness: 3px; */
  color: white;
  border: 5px solid white;
  border-radius: 100px;
`;
const MiddleWapContent = styled.div`
  padding: 0px 4px 2px 4px;
  border-bottom: 2px solid white;
  width: fit-content;
  /* text-decoration-line: underline; */
  /* text-decoration-style: double;
  text-underline-offset: 0.4cm;
  text-decoration-thickness: 3px; */
  color: white;
  display: flex;
  align-items: center;
`;
const MiddleContent = styled.div`
  text-align: center;
  border-bottom: 2px solid white;
  width: fit-content;
  display: flex;
  justify-content: center;
  /* text-decoration-line: underline; */
  /* text-decoration-style: double;
  text-underline-offset: 0.4cm;
  text-decoration-thickness: 3px; */
  color: white;
`;
const TemperatureNuber = styled.div`
  font-size: 40pt;
  color: white;
`;
const TemperatureText = styled.div`
  color: white;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

const ChartBox = styled.div`
  width: 300px;
  height: 230px;
  background-color: white;
  opacity: 0.4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MiniChartBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  height: 60px;
  border-bottom: 2px solid black;
  padding: 0 6px 0 6px;
  width: 200px;
`;
const HumidityNumber = styled.p`
  font-size: 40px;
`;
const HumidityText = styled.div`
  text-align: center;
  border-top: 2px solid black;
  margin-top: 5px;
  width: 200px;
  font-size: 15pt;
`;

const ChartBox2 = styled.div`
  width: 300px;
  height: 230px;
  background-color: white;
  opacity: 0.4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MiniChartBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  height: 60px;
  border-bottom: 2px solid black;
  padding: 0 6px 0 6px;
  width: 200px;
`;
const WateringNumber = styled.div`
  font-size: 40pt;
`;
const WateringText = styled.div`
  text-align: center;
  border-top: 2px solid black;
  margin-top: 5px;
  width: 200px;
  font-size: 15pt;
`;
const ChartBox3 = styled.div`
  width: 300px;
  height: 230px;
  background-color: white;
  opacity: 0.4;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;
const None = styled.div``;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Button2 = styled.button`
  box-shadow: inset 0px -1px 0px 0px #9fb4f2;
  background-color: transparent;
  border: 5px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 22px 47px;
  text-decoration: none;
  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
`;
export {
  Button,
  Top,
  Topleft,
  None,
  Wrapper,
  ModalBackground,
  ChartBox,
  MiniChartBox1,
  Bottom,
  TemperatureNuber,
  TemperatureText,
  Middle,
  Illumination,
  IlluminationText,
  IlluminationNumber,
  MiddleContent,
  MiddleWapContent,
  HumidityNumber,
  HumidityText,
  Button2,
  ChartBox3,
  ChartBox2,
  MiniChartBox2,
  WateringNumber,
  WateringText,
};
