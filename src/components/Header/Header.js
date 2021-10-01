import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img className="logo" src={logo} alt="" />
            </div>
            <nav>
                <div className="menu-content">
                    <a href="/shop">Shop</a>
                    <a href="/Order">Order Review</a>
                    <a href="/inventory">Manage Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;