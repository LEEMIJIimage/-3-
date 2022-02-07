import styled from "styled-components";

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 50px;
  margin-top: 30px;
`;
const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #a6827e;
  background-color: transparent;
  border-radius: 3px;
  border: 4px solid white;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 25px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #4d3534;
`;
const Middle = styled.div``;
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
export { Button, Top, ChartBox, Bottom, Middle };
