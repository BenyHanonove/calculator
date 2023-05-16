import React from 'react';
import {Container } from "react-bootstrap";
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen';
import CalculatorPad from '../CalculatorPad/CalculatorPad';
import {useState} from "react"
import "./CalculatorBody.css";


function CalculatorBody() {

  const [screenValue ,setScreenValue] = useState("0");
  const [operator ,setOperator] = useState("");
  const [firstNum ,setFirstNum] = useState(0);
  const [secondNum ,setSecondNum] = useState(0);

  
  const clickHandler = (input)=>{
    

    //HANDELS NUMBER INPUT
    //CHECK IF THE INPUT IS NUMBER 
    if(parseInt(input) || input === "0"){

      //IF SCREEN SHOW 0 THEN JUST INPUR FIRST ONE
      if(screenValue === "0"){
        setScreenValue(input);
      }else{
        let str = screenValue + input ;
        setScreenValue(str);
      }
    }else{
        
      if(input === "C"){
        let str = screenValue.slice(0,-1);
        if(str){setScreenValue(str);}
        else{setScreenValue("0")};
        return;
      }

      if(operator || input === "="){
        setSecondNum(parseFloat(screenValue));
        artimatiMethoeds();
      }else{
        setFirstNum(parseFloat(screenValue));
        setOperator(input);
        setScreenValue("0")
      }
    }

  };

  const artimatiMethoeds = ()=>{
    switch(operator){
      
      case "+":
        setScreenValue((firstNum + secondNum).toString());
        setFirstNum(firstNum + secondNum);
        setSecondNum(0)
        setOperator("");
        break;

      case "-":
        setScreenValue((firstNum - secondNum).toString());
        setFirstNum(firstNum - secondNum);
        setSecondNum(0)
        setOperator("");
        break;

      case "X":
        setScreenValue((firstNum * secondNum).toString());
        setFirstNum(firstNum * secondNum);
        setSecondNum(0)
        setOperator("");
        break;

      case "÷":
        setScreenValue((firstNum / secondNum).toString());
        setFirstNum(firstNum / secondNum);
        setSecondNum(0)
        setOperator("");
        break;
    }
  };


  return (
    <div className='page-wrapper'>
        <Container className='calculator'>
            <CalculatorScreen value={screenValue} />
            <CalculatorPad func={clickHandler}/>
        </Container>
    </div>
  )
}

export default CalculatorBody;