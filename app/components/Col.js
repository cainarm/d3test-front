import React from 'react';
import PropTypes from 'prop-types';

const Col = (props) => {
    const {sm, md, xs, className} = props;
    let cl;

    if(sm) cl = `col-sm-${sm} ${className}`;
    if(md) cl = `col-md-${md} ${className}`;
    if(xs) cl = `col-xs-${xs} ${className}`;

    return (
        <div className={cl} style={props.style}>
            {props.children}
        </div>
    );
} 

Col.defaultProps = {
    className: ""
}

Col.PropTypes = {
    sm: PropTypes.number,
    md: PropTypes.number,
    xs: PropTypes.number,
}


export default Col;