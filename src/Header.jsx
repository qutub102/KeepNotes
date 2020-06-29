import React from 'react';
import './index.css'
const Header = (props) => {
    const srchEvent = (event) => props.srchEven(event);
     return(
        <>
            <div className='header'>
                <div className='logo'>
                    <h3>QB</h3>
                </div>
                <div className="search">
                    <input id="srch" placeholder="Search" name="srch" onChange={srchEvent} value={props.search}></input>
                </div>
            </div>
        </>
    );
}
export default Header;