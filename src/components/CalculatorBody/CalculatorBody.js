import React from 'react';
import {Container } from "react-bootstrap";
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen';
import CalculatorPad from '../CalculatorPad/CalculatorPad';
import "./CalculatorBody.css";


function CalculatorBody() {

  return (
    <div className='page-wrapper'>
        <Container className='calculator'>
            <CalculatorScreen/>
            <CalculatorPad/>
        </Container>
    </div>
  )
}

export default CalculatorBody;