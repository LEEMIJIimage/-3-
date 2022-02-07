import styled, { keyframes } from "styled-components";

const modalFadeIn = keyframes`
  0% {
    background-color:transparent;
  }
  100% {
    background-color:white;
  }
`;

// const modalButtonFadeIn = keyframes`
//   0% {
//     opacity: 0;
//     background-color:transparent;
//   }
//   50% {
//     opacity: 0.5;
//   }
//   100% {
//     opacity: 1;
//     background-color:black;

//   }
// `;
// animation: ${modalButtonFadeIn} .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

const ChartWrap = styled.div`
 position: absolute;
 width: 60vw;
 height: 80vh;
 background-color: white;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 @media screen and (max-width: 1600px){
  width: 1000px;
 }
 display:flex;
 flex-direction: column;
 background-color:transparent;
 animation: ${modalFadeIn} .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
 border: 2px solid dark;
`;

const TitleWrap = styled.div`
display: flex;
justify-content: flex-end;
`;
const GetOutModal = styled.div`
position:absolute;
top: -24px;
right: -24px;
width: 56px;
height: 56px;
border-radius: 50%;
padding: 16px 0 0 16px;
background-color: black;
`;

export { ChartWrap, GetOutModal, TitleWrap };
