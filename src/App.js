import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [prev,updateinput]=useState("");
  //to retain history of calculations using usestate hook
  const [history,updateHistory]=useState([]);

  const inputdisplay=(value)=>{
    updateinput((prev)=>prev+value);
  };

  const clearDisplay=()=>{
    updateinput("");
  };

  const delOne=()=>{
    let del=prev.slice(0,-1);
    updateinput(del);
  };

  function calculate(input){
    try{
      const match = prev.match(/(\d+)([+\-*/])(\d+)/);
      
      if (!match){
        return "error";
      }
      const num1=parseFloat(match[1]);
      const operator=match[2];
      const num2=parseFloat(match[3]);

      let finresult;
      switch(operator){
        case '+':
          finresult=num1+num2;
          break;
        case '-':
          finresult=num1-num2;
          break;
        case '*':
          finresult=num1*num2;
          break;
        case '/':
          finresult=num1/num2;
          break;
        default:
          return "error";
      }
      return finresult.toString();
    }
    catch(error){
      return "error";
    }
  }

  const result = () => {
    const finresult = calculate(prev);
    updateinput(finresult);
    if (finresult !== "error") {
      updateHistory([...history, { expression: prev, result: finresult }]);
  }
  }
  
    
  return (
    <div className='container'>
      <div className="mycal">
        <div><input className="display" type="text" placeholder="0" value={prev}/></div>
          <div className="buttons">
            <button onClick={clearDisplay}>AC</button> 
            <button onClick={delOne}>DEL</button>
            <button onClick={()=>inputdisplay('/')}>/</button>
            <button onClick={()=>inputdisplay('*')}>*</button>
    
            <button onClick={()=>inputdisplay('7')}>7</button>
            <button onClick={()=>inputdisplay('8')}>8</button>
            <button onClick={()=>inputdisplay('9')}>9</button>
            <button onClick={()=>inputdisplay('-')}>-</button>
    
            <button onClick={()=>inputdisplay('4')}>4</button>
            <button onClick={()=>inputdisplay('5')}>5</button>
            <button onClick={()=>inputdisplay('6')}>6</button>
            <button onClick={()=>inputdisplay('+')}>+</button>
            
            <button onClick={()=>inputdisplay('1')}>1</button>
            <button onClick={()=>inputdisplay('2')}>2</button>
            <button onClick={()=>inputdisplay('3')}>3</button>
            <button className="equalto" onClick={result}>=</button>
            
            <button onClick={()=>inputdisplay('0')}>0</button>
            <button onClick={()=>inputdisplay('00')}>00</button>
            <button onClick={()=>inputdisplay('.')}>.</button>
          </div>
        </div>   
          <div className="history">
                <h3>History</h3>
                <ul>
                  {history.map((entry, index) => (
                    <li key={index}>{entry.expression} = {entry.result}</li>
                ))};
                </ul>
          </div>
        </div>
  );
};

export default App;
