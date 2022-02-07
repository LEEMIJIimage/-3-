import styled from "styled-components";

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
`;

const GetOutModal = styled.div``;

export { ChartWrap, GetOutModal };
