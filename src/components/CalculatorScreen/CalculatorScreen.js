import {Row} from "react-bootstrap";
import "./CalculatorScreen.css";

function CalculatorScreen({value}) {

  return (
    <Row className='CalculatorScreen'>
        <label className='ScreenText'>{value}</label>
    </Row>
  )
}

export default CalculatorScreen;