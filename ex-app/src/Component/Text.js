import { useState } from 'react';
//import './App.css';
import { BlackBoard, MainName,BlackBoard2,Middle } from './TextStyled';


  //리엑트 hook(useState사용),onchange이벤트 사용
function Text(){
  const [text, setText]=useState(null);
  const handlechange=(e)=>{
    setText(e.target.value);
  }
  return(
    <div> 
    <MainName>디지철 철판</MainName>


    <Middle>
    <div>
    <BlackBoard value={text} 
    ></BlackBoard>
    </div>

    <div>
     <BlackBoard2 placeholder='값을 입력하시오'  value={text}
     onChange={handlechange}></BlackBoard2>  
     </div>
     
     </Middle>
    </div>
  )
}
export default Text;

