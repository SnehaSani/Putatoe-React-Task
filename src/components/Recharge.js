import React from 'react';
import airtel from '../images/airtel.jpeg';
import bsnl from '../images/bsnl.png';
import vi from '../images/vi.png';
import jio from '../images/jio.png';
import scan from '../images/scanImage.png';

function Recharge(){
    return(
        <div className='recharge'>
            <div className='recharge-left'>
                <p style={{fontSize:'45px',color:'#2a3e78',fontWeight:'bold'}}>RECHARGE</p>
                <p style={{fontSize:'18px',color:'#5a6489',marginBottom:'10px'}}>With ease, with Putatoe !</p>
                <div className='images'>
                    <img src={airtel} alt="airtel" className='image'/>
                    <img src={jio} alt="jio" className='image'/>
                    <img src={vi} alt="vi" className='image'/>
                    <img src={bsnl} alt="bsnl" className='image'/>
                </div>
                <div className='Btns'>
                    <button className='btn'>Recharge Now</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            <img style={{maxHeight:"200px"}} src={scan} alt="card" />
        </div>
    );
}

export default Recharge;