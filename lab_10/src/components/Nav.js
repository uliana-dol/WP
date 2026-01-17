import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'; 

const Nav = () => {
    const cartItemsCount = useSelector(state => state.cartItems.reduce((acc, item) => acc + item.quantity, 0));

    const activeStyle = {
        color: '#9b0f16ff',
        fontWeight: 'bold'
    };

    return (
        <nav className="site-nav">
            <ul>
                <li>
                    <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Catalog
                    </NavLink>
                </li>
                <li><a href="#about">About</a></li>
                
                <li>
                    <NavLink 
                        to="/cart" 
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Cart ({cartItemsCount})
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
