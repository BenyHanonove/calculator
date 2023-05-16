import React from 'react';
import "./CalculatorButton.css";
import { Button } from "react-bootstrap";


function CalculatorButton({value}) {

    const buttonColorChooser = () =>{
      const num = parseInt(value);
      
      if(num || value === "0"){
        return ""
      }else{
        
        if(value === "="){
          return "green";
        }else{
          return "red";
        }

      }

    };


    const buttonStyle = {backgroundColor: buttonColorChooser()}


  return (
        <Button className='pad' style={buttonStyle}>{value}</Button>
  )
}

export default CalculatorButton;