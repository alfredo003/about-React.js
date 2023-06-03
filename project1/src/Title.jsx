import { useState } from "react";
function Title({color}){
  const [text,setText] = useState("Name Not found")
 const [inputText,setInputText] = useState(" ");
 function click(){
    setText(inputText);
  }

  return (
    <div>
      <h1 style={{color}}>{text}</h1> 
      <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
      <button onClick={click}>Change</button>
     
    </div>
  ); 
}

export default Title;