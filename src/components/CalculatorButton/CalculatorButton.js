import React from 'react';
import "./CalculatorButton.css";
import { Button } from "react-bootstrap";


function CalculatorButton({value}) {
  return (
        <Button>{value}</Button>
  )
}

export default CalculatorButton;