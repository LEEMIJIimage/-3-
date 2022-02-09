/* eslint-disable consistent-return */
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    background:rgba(0,0,0,.0);
  }
  100% {
    background:rgba(0,0,0,0.5);
  }
`;

const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 50px;
  margin-top: 30px;
`;
const Illumination = styled.div`
  text-align: center;
`;
const IlluminationText = styled.p`
  font-size: 20pt;
  color: white;
  margin-bottom: 0%;
`;
const IlluminationNumber = styled.p`
  font-size: 50pt;
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
`;
const Temperature = styled.p`
  font-size: 30pt;
  color: white;
  text-decoration-line: underline;
  text-decoration-style: double;
  text-underline-offset: 0.4cm;
  text-decoration-thickness: 3px;
  margin-bottom: 100pt;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
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
  animation: ${fadeIn} 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
`;

export {
  Button,
  Top,
  None,
  Wrapper,
  ModalBackground,
  ChartBox,
  Bottom,
  Temperature,
  Middle,
  Illumination,
  IlluminationText,
  IlluminationNumber,
};
