import React from 'react';
import PropTypes from 'prop-types';
import Col from '../Col';
import Row from '../Row';

const WarningContainer = ({title, text}) => 
    <div className="warningContainer">
        <span>Preenchimento Obrigatório</span> 
        <h3>{title}</h3> 
        <Row>
            <Col md={8}>
                {text}       
            </Col>
        </Row>

    </div>


WarningContainer.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}
export default WarningContainer;