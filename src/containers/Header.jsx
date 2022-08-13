import React from 'react';
import '@styles/header.sass'
import Carousel from '../components/Carousel';

import searchIcon from '@icons/icons8-search-50.png'
import cartIcon from '@icons/icons8-shopping-cart-50.png'
import userIcon from '@icons/icons8-user-50.png'
import drugBg from '@logos/header-bg.jpeg'

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="icons-container">
                    <figure className="icon search-btn">
                        <img src={searchIcon} alt="cart-btn" />
                    </figure>
                    <figure className="icon cart-btn">
                        <img src={cartIcon} alt="cart-btn" />
                    </figure>
                    <figure className="icon user-btn">
                        <img src={userIcon} alt="user-btn" />
                    </figure>
                </div>
            </nav>
        </header>
    );
};

export default Header;