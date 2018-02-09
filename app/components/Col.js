import React from 'react';

const Col = (props) => {
    const {sm, md, xs, className = ""} = props;
    let cl;

    if(sm) cl = `col-sm-${sm} ${className}`;
    if(md) cl = `col-md-${md} ${className}`;
    if(xs) cl = `col-xs-${xs} ${className}`;

    return (
        <div className={cl}>
            {props.children}
        </div>
    );
} 


export default Col;