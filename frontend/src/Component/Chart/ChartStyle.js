import styled, { keyframes } from "styled-components";

const modalFadeIn = keyframes`
  0% {
    background-color:transparent;
  }
  100% {
    background-color:white;
  }
`;

const modalContentFadeIn = keyframes`
  0% {
    opacity: 0;
    color: transparent;
  }
  100% {
    opacity: 1;
    color: black;
  }
`;

const modalTitleFadeIn = keyframes`
  0% {
    opacity: 0;
    color: transparent;
    
  }
  100% {
    opacity: 1;
    color: black;
    border-bottom: 2px solid black;
  }
`;

// const modalMiddleFadeIn = keyframes
//   100% {
//     display: flex;
//   justify-content: center;
//   }
// `;

// const modalTitleFadeIn = keyframes
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//     background-color: #acbfe3;
//   }
// `;

const sketchIn = keyframes`
  0% {
    opacity: 30%;
    stroke-dasharray: 41 2673;
    stroke-dashoffset: 1716;
  }
  10%{
    opacity: 50%;
    stroke-dasharray: 298 2427;
    stroke-dashoffset: 1730;
  }
  20%{
    opacity: 70%;
    stroke-dasharray: 614 2110;
    stroke-dashoffset: 1730;
  }
  30%{
    opacity: 90%;
    stroke-dasharray: 921 1800;
    stroke-dashoffset: 1730;
  }
  40%{
    opacity: 100%;
    stroke-dasharray: 1421 1303;
    stroke-dashoffset: 1730;
  }
  50%{
    opacity: 100%;
    stroke-dasharray: 1721 1003;
    stroke-dashoffset: 1730;
  }
  60% {
    opacity: 100%;
    stroke-dasharray: 1928 1464;
    stroke-dashoffset: 2399;
  }
  70% {
    opacity: 100%;
    stroke-dasharray: 2252 1143;
    stroke-dashoffset: 2399;
  }
  80% {
    opacity: 100%;
    stroke-dasharray: 2511 885;
    stroke-dashoffset: 2399;
  }
  90% {
    opacity: 100%;
    stroke-dasharray: 3085 311;
    stroke-dashoffset: 2399;

  }
  100% {
    opacity: 100%;
    stroke-dasharray: 3370 0;
    stroke-dashoffset: 2399;
  }
`;
const ChartWrap = styled.div`
  position: absolute;
  width: 60vw;
  height: 80vh;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1600px) {
    width: 1000px;
  }
  display: flex;
  flex-direction: column;
  background-color: transparent;
  animation: ${modalFadeIn} 1s 1.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  border: 2px solid dark;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  animation: ${modalContentFadeIn} 0.5s 1.4s linear forwards;
`;

const TitleText = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  font-size: 32px;
  opacity: 0;
  margin: 0 5% 0 5%;
  padding: 8px 0 8px 0;
  animation: ${modalTitleFadeIn} 0.5s 1.4s linear forwards;
`;

const GetOutModal = styled.div`
  position: absolute;
  top: -24px;
  right: -24px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 8px 0 0 8px;
  background-color: black;
`;

const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  z-index: -1;
`;

const Rect = styled.rect`
  opacity: 0;
  stroke: #fff;
  stroke-width: 4px;
  animation: ${sketchIn} 0.9s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const Middle = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  animation: ${modalContentFadeIn} 0.6s 1.5s linear forwards;
`;

const DateButton = styled.button`
  height: 38px;
  margin: 0 16px 0 16px;
  transition-duration: 0.4s;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: black;
    color: white;
  }
`;
export {
  ChartWrap,
  GetOutModal,
  TitleWrap,
  SVG,
  Rect,
  TitleText,
  Middle,
  DateButton,
};
