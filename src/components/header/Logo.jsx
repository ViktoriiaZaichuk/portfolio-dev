import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/portfolio-dev">
                <span>VZ</span>
            </NavLink>
        </div>
    )
}

export default Logo;