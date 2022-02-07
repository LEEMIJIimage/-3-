/* eslint-disable consistent-return */
import styled from "styled-components";

const Wrapper = styled.div`
`;
const Top = styled.div`
  display: flex;

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

const None = styled.div``;

const ModalBackground = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.5);
`;
export { Button, Top, None, Wrapper, ModalBackground };
