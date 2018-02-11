import React from 'react';

const Row = (props) => {
    const {className} = props;

    return(
        <div className={`row ${className}`} >{props.children}</div>
    )
}

Row.defaultProps = {
    className : ""
}
    


export default Row;