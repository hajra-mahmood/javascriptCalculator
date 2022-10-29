
import './App.scss';
import {useState} from 'react';

function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState("");
  const total = () => {
setAnswer(eval(expression));
  }
  const display = (symbol) => {
   setExpression( (prev) => prev + symbol);
   if(expression[expression.length -1] == "="){
    if(/[0-9.]/.test(symbol)){
      setExpression(symbol);
    }
    else {
      setExpression(answer + symbol);
    }
   }
  };
  const allClear = () =>{
    setExpression("");
    setAnswer(0)
  }
  const clear = () => {
    setExpression((prev) => prev.split("").splice(0, prev.length - 1).join(""));
  };
  return (
    <div className="container">

      <div className = "grid">
        <div className = "dis" id = "display">
          <input value = {expression} placeholder = "0" disabled/>
          <div className = "total">{answer}</div>
       </div>
        
        <div onClick = {allClear} className = "padButtons AC">AC</div>
        <div onClick = {clear} className = "padButtons C" id = "clear">C</div>
        <div onClick = {() => display("/")} className = "padButtons divide" id ="divide">/</div>
        <div onClick = {() => display("*")} className = "padButtons multiply" id ="multiply">*</div>
        <div onClick = {() => display("7")} className = "padButtons dark-grey seven" id ="seven">7</div>
        <div onClick = {() => display("8")} className = "padButtons dark-grey eight" id ="eight">8</div>
        <div onClick = {() => display("9")} className = "padButtons dark-grey nine" id ="nine">9</div>
        <div onClick = {() => display("-")} className = "padButtons subtract" id ="subtract">-</div>
        <div onClick = {() => display("4")} className = "padButtons dark-grey four" id ="four">4</div>
        <div onClick = {() => display("5")} className = "padButtons dark-grey five" id ="five">5</div>
        <div onClick = {() => display("6")} className = "padButtons dark-grey six" id ="six">6</div>
        <div onClick = {() => display("+")} className = "padButtons add" id ="add">+</div>
        <div onClick = {() => display("1")} className = "padButtons dark-grey one" id ="one">1</div>
        <div onClick = {() => display("2")} className = "padButtons dark-grey two" id ="two">2</div>
        <div onClick = {() => display("3")} className = "padButtons dark-grey three" id ="three">3</div>
        <div onClick = {total } className = "padButtons equal" id = "equals">=</div>
        <div onClick = {() => display("0")} className = "padButtons dark-grey zero" id ="zero">0</div>
        <div onClick = {() => display(".")} className = "padButtons decimal" id ="decimal">.</div>
      </div>
    
    </div>
  );
}

export default App;
