import React from 'react';


const RoundButton = ({children, active, ...props}) => 
    <button className={`roundButton ${active && 'roundButton-active'}`} {...props} >{children}</button>

export default RoundButton;