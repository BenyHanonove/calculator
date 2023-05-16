import React, { useState } from 'react';
import {Row} from "react-bootstrap";
import "./CalculatorScreen.css";

function CalculatorScreen() {

    const [screenValue ,setScreenValue] = useState("0")


  return (
    <Row className='CalculatorScreen'>
        <label className='ScreenText'>{screenValue}</label>
    </Row>
  )
}

export default CalculatorScreen;