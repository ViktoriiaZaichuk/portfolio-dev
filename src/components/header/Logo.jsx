import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/">
                <span>VZ</span>
            </NavLink>
        </div>
    )
}

export default Logo;