import React from 'react';
import PropTypes from 'prop-types';

const RoundSelectField = props => 
    <div className="roundInputContainer">
       <label htmlFor={props.name}>{props.label && <a>{props.label} </a> }</label>
       <select 
            {...props}
            placeholder=" "
            className={`roundInput ${props.className && props.className}`}
            component="select" 
        >
            <option value={null}></option>
            {
                props.data.map(row => {
                    return (
                        <option value={row.value}>{row.text}</option>
                    )
                })
            }
        </select>
    </div>

RoundSelectField.propTypes = {
    label: PropTypes.string,
    data: PropTypes.array.isRequired
}



export default RoundSelectField;