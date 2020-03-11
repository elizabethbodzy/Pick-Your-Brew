import React from 'react';
import gif from '../assets/giphy.gif'

const Header = () => {
    return (
        <header>

            <img className="gif" src={gif} alt="pouring" />
            <h1 className="title"> Pick Your Brew</h1>


        </header>
    )
}

export default Header;