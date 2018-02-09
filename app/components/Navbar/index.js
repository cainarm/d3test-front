import React from 'react';

const Navbar = ({active, numbers}) => 
    <ul className="nav nav-tabs nav-justified" id="navbar">
        {
            [...Array(numbers)].map((element, index) => 
                <li role="presentation" className={`${active === index + 1 && 'active'}`} ><a><h3>{index + 1}</h3></a></li>
            )
        }
    </ul>


export default Navbar;