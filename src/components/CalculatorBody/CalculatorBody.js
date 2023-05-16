import React from 'react';
import {Container } from "react-bootstrap";
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen';
import "./CalculatorBody.css";


function CalculatorBody() {
  return (
    <div className='page-wrapper'>
        <Container className='calculator'>
            <CalculatorScreen/>
        </Container>
    </div>
  )
}

export default CalculatorBody;