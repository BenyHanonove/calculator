import React from 'react';
import { Container ,Row ,Col} from 'react-bootstrap';
import CalculatorButton from '../CalculatorButton/CalculatorButton.js';
import "./CalculatorPad.css";


function CalculatorPad() {

    const buttonsArr = [
        ["7" ,"8" ,"9","÷"],
        ["4" ,"5" ,"6","X"],
        ["3" ,"2" ,"1","-"],
        ["0" ,"C" ,"=","+"],
      ];

  return (
    <Container className='pad'>
        {
            buttonsArr.map((row,rowIndex)=>(
                <Row className='pad' key={rowIndex}>
                    {
                        row.map((buttonLabel ,buttonIndex)=>(
                            <Col xs={3} key={`${row}/${buttonIndex}`}>
                                <CalculatorButton value={buttonLabel}/>        
                            </Col>
                        ))
                    }
                </Row>
            ))
        }
    </Container>
  )
}

export default CalculatorPad;