import React from  'react';
import PropTypes from 'prop-types';
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

Hfsection.propTypes = {
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    reverse: PropTypes.bool
}

export default Hfsection;