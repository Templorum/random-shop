import React from "react";
import {ReactComponent as RandomAppLogo} from './RandomShopLogo4.svg';

const Header = () => {
    return (
        <header className='Header'>
            <div className='Header__Container'>
                <div className='Header__Container__Logo'>
                    <RandomAppLogo className='Header__Container__Logo_Logo-resize'/>
                </div>
            </div>
            <div className='Header__Container'>
                <div className='Header__Container__Search-bar'>
                    search bar
                </div>
            </div>
            <div className='Header__Container'>
                <div className='Header__Container__Stub'> </div>
            </div>
            <div className='Header__Container'>
                <div className='Header__Container__Profile'>
                    profile
                </div>
            </div>
        </header>
    )
}

export default Header;