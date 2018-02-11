import React from 'react';
import PropTypes from 'prop-types';

export const RoundTextField = props => 
    <div className="roundInputContainer">
        <label htmlFor={props.name}>{props.label && <a>{props.label} </a> }</label>
        <input
            placeholder="" 
            {...props}
            ref={props.setRef}
            type="text"
            className={`roundInput ${props.className && props.className}`}
        />
    </div>


RoundTextField.propTypes = {
    label: PropTypes.string,
    setRef: PropTypes.func
}


export default RoundTextField;