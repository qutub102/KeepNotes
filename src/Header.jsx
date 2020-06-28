import React from 'react';
import './index.css'
const Header = () => {
    return(
        <>
            <div className='header'>
                <div className='logo'>
                    <h3>QB</h3>
                </div>
                <div className="search">
                    <input id="srch" placeholder="Search" name="srch"></input>
                    <button>Search</button>
                </div>
            </div>
        </>
    );
}
export default Header;