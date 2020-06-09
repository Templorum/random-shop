import React from "react";
import {ReactComponent as RandomAppLogo} from './RandomShopLogo4.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <RandomAppLogo className='logo-resize'/>
                </div>
            </div>

            <div className='container'>
                <div className='search-bar'>
                    search bar
                </div>
            </div>
            <div className='container'>
                <div className='stub'> </div>
            </div>
            <div className='container'>
                <div className='profile'>
                    profile
                </div>
            </div>
        </header>
    )
}

export default Header;