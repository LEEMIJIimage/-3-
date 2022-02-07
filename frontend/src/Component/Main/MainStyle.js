import styled from "styled-components";
import bgImage from "../../imges/imge.png";

const Backgrond = styled.div`
  background-image: url(${bgImage});
  background-repeat : no-repeat;
  background-size : cover;
  background-position: center center;
  width: 100vw;
  height: 100vh;
`;

export default Backgrond;
