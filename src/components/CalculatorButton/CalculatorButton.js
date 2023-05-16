import React from 'react';
import "./CalculatorButton.css";
import { Button } from "react-bootstrap";


function CalculatorButton({value ,func}) {

    const buttonColorChooser = () =>{
      
      if(parseInt(value) || value === "0"){
        return "";
      }
      else{       
        if(value === "="){return "green";}
        else{return "red";}
      }

    };


    const buttonStyle = {backgroundColor: buttonColorChooser()}


  return (
        <Button className='pad' onClick={()=>{func(value)}} style={buttonStyle}>{value}</Button>
  )
}

export default CalculatorButton;