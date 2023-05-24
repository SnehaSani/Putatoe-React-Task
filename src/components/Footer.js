import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faCommentDots,faUser,faClipboardList} from '@fortawesome/free-solid-svg-icons';
import icon from '../images/putatoe_icon.webp';

function Footer(){
    const styles={
        color:"#027e8a",
        height:"25px",
    };

    return(
        <div className='footer'>
            <div className="footer-row">
                <div className="footer-cell">
                <FontAwesomeIcon icon={faHouse} style={styles} />
                <span>Home</span>
                </div>
                <div className="footer-cell">
                <FontAwesomeIcon icon={faUser}  style={styles}/>
                <span>Profile</span>
                </div>
                <div className="footericon">
                    <img src={icon} alt="icon" />
                </div>
                <div className="footer-cell">
                <FontAwesomeIcon icon={faClipboardList}  style={styles} />
                <span>Follow</span>
                </div>
                <div className="footer-cell">
                <FontAwesomeIcon icon={faCommentDots} style={styles}/>
                <span>Chat</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;