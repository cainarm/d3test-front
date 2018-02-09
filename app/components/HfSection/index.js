import React from  'react';
import Col from '../Col';
import Row from '../Row';

const Hfsection = ({leftText, rightText, reverse}) =>
    <Row className={`Hfsection ${reverse && 'HFReverse'}`}>
        <Col sm={6} className="text-left">
            <a>{leftText}</a>
        </Col>
        <Col sm={6} className="text-right">
            <a>{rightText}</a>
        </Col>
    </Row>


export default Hfsection;