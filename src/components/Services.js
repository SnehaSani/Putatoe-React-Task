import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton,faTv,faIndianRupeeSign,faBullhorn,faNewspaper,faMessage,faPeopleGroup,
    faComments,faFireBurner,faLightbulb,faDroplet,faChevronRight,} from '@fortawesome/free-solid-svg-icons';

function Services(){
    const styles={
        color:"#027e8a",
        height:"30px",
    };

    return(
        <div className="icon-grid">
            <div className="icon-row">
                <div className="icon-cell">
                <FontAwesomeIcon icon={faMobileScreenButton} style={styles} />
                <span>Prepaid Mobile Recharge</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faTv}  style={styles}/>
                <span>DTH Recharge</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faIndianRupeeSign}  style={styles}/>
                <span>Loans</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faBullhorn}  style={styles} />
                <span>Promotion</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faNewspaper} style={styles}/>
                <span>News</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faMessage} style={styles}/>
                <span>Blog</span>
                </div>
            </div>
            <div className="icon-row">
                <div className="icon-cell">
                <FontAwesomeIcon icon={faPeopleGroup} style={styles}/>
                <span>Jobs</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faComments} style={styles}/>
                <span>Anonymous Feedback</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faFireBurner} style={styles}/>
                <span>Gas Booking</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faLightbulb} style={styles}/>
                <span>Electricity Bill</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faDroplet} style={styles}/>
                <span>Water Bill</span>
                </div>
                <div className="icon-cell">
                <FontAwesomeIcon icon={faChevronRight} style={styles}/>                
                <span>See More</span>
                </div>
            </div>
        </div>
    );
}

export default Services;