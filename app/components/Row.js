import React from 'react';

const Row = ({className, children}) => 
    <div className={`row ${className}`} >{children}</div>
    


Row.defaultProps = {
    className : ""
}
    

export default Row;