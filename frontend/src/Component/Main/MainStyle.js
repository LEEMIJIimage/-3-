/* eslint-disable consistent-return */
import styled from "styled-components";

const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 50px;
  margin-top: 30px;
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
  font-size: 25px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #4d3534;
`;
const Middle = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;

  /* text-decoration-line: underline; */
  /* text-decoration-style: double;
  text-underline-offset: 0.4cm;
  text-decoration-thickness: 3px; */
  margin-bottom: 100pt;
  color: white;
`;

const MiddleWapContent = styled.div`
  padding: 0 4px 2px 4px;
  border-bottom: 2px solid white;
  width: fit-content;
  /* text-decoration-line: underline; */
  /* text-decoration-style: double;
  text-underline-offset: 0.4cm;
  text-decoration-thickness: 3px; */
  color: white;
`;

const MiddleContent = styled.div`
  text-align: center;
  border-bottom: 2px solid white;
  width: fit-content;
  display: flex;
  justify-content: center;
  padding: 0 6px 0 6px;
  /* text-decoration-line: underline; */
  /* text-decoration-style: double;
  text-underline-offset: 0.4cm;
  text-decoration-thickness: 3px; */
  color: white;
`;

const TemperatureNuber = styled.div`
  font-size: 30pt;
  color: white;
`;
const TemperatureText = styled.div`
  color: white;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
`;
const ChartBox = styled.div`
  width: 280px;
  height: 230px;
  background-color: white;
  opacity: 0.4;
  border-radius: 20px;
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
export {
  Button,
  Top,
  Topleft,
  None,
  Wrapper,
  ModalBackground,
  ChartBox,
  Bottom,
  TemperatureNuber,
  TemperatureText,
  Middle,
  Illumination,
  IlluminationText,
  IlluminationNumber,
  MiddleContent,
  MiddleWapContent,
};
