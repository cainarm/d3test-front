import React from 'react';


const RoundButton = (props) => 
    <button className={`roundButton ${props.active && 'roundButton-active'}`} {...props} >{props.children}</button>

export default RoundButton;