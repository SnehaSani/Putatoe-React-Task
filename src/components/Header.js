import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faBell,faCartPlus,faMagnifyingGlass,faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
        <div className='header'>
            <div className='loc'>
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",height:'35px',}} />
                <span className="location-text">Harhwa Fatak Nirala Nagar, Gorakhpur, Nirala Nagar,UttarPradesh, 273004, India</span>
                <FontAwesomeIcon icon={faBell} style={{color: "#ffffff",height:'35px',}} />
                <div className='one'>0</div>
                <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff",height:'35px',}} />
            </div>
            <div className='search-audio'>
                <div className='search'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#409ea7",height:'25px',transform: 'translate(150%,30%)',}} />
                    <input className='search-text' type="text" placeholder='Search for Products...' />
                </div>
                <FontAwesomeIcon icon={faMicrophone} style={{color: "#ffffff",height:'28px'}} />
            </div>
        </div>
    );
}

export default Header;