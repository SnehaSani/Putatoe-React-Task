import React from 'react';
import brick from '../images/brick.webp';
import construction from '../images/construction.jpeg';
import consultancy from '../images/consultancy.jpeg';
import coverBlock from '../images/coverBlock.jpg';
import grocery from '../images/grocery.jpeg';
import interior from '../images/interior.png';
import icon from '../images/putatoe_icon.webp';


function Category(){
    return(
        <div className='category'>
            <div className='heading'>
                <h1>SHOP BY CATEGORY</h1>
            </div>
            <div className='content1'>
                <p >Construction</p>
                <span className='underline'></span>
                <div className='construction-imgs'>
                    <div className="img1">
                        <img style={{maxWidth: "100px",}} src={coverBlock} alt="block" />
                        <span>cover block</span>
                        <div className='offer'>UP TO <span>0% OFF</span></div>
                    </div>
                </div>
            </div>
            <div className="box">
                <h1>Popular Service Products</h1>
            </div>
            <div className='content2'>
                <p >Construction</p>
                <span className='underline'></span>
                <div className='construction-imgs'>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={brick} alt="brick" />
                        <span>Royal Brick</span>
                    </div>
                    <div className="img2">
                        <div className='letterimg1'><p>P</p></div>
                        <span>Putty</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={brick} alt="brick" />
                        <span>Royal Brick</span>
                    </div>
                    <div className="img2">
                    <div className='letterimg1'><p>P</p></div>
                        <span>Putty</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={brick} alt="brick" />
                        <span>Royal Brick</span>
                    </div>
                    <div className="img2">
                    <div className='letterimg1'><p>P</p></div>
                        <span>Putty</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={brick} alt="brick" />
                        <span>Royal Brick</span>
                    </div>
                    <div className="img2">
                    <div className='letterimg1'><p>P</p></div>
                        <span>Putty</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={brick} alt="brick" />
                        <span>Royal Brick</span>
                    </div>
                </div>
            </div>

            <div className="box">
                <h1>All Popular Service Providers</h1>
            </div>
            <div className='content2'>
                <p >Construction</p>
                <span className='underline'></span>
                <div className='construction-imgs'>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={interior} alt="interior" />
                        <span>Suprabha Interiors</span>
                    </div>
                    <div className="img2">
                        <div className='letterimg2'><p>G</p></div>
                        <span>Gangotri Building Material</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={interior} alt="interior" />
                        <span>Suprabha Interiors</span>
                    </div>
                    <div className="img2">
                    <div className='letterimg2'><p>G</p></div>
                        <span>Gangotri Building Material</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={interior} alt="interior" />
                        <span>Suprabha Interiors</span>
                    </div>
                    <div className="img2">
                    <div className='letterimg2'><p>G</p></div>
                        <span>Gangotri Building Material</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={interior} alt="interior" />
                        <span>Suprabha Interiors</span>
                    </div>
                    <div className="img2">
                    <div className='letterimg2'><p>G</p></div>
                        <span>Gangotri Building Material</span>
                    </div>
                    <div className="img2">
                        <img style={{maxWidth: "150px",marginBottom:"12px"}} src={interior} alt="interior" />
                        <span>Royal Brick</span>
                    </div>
                </div>
            </div>


            <div className="box">
                <h1>Services We Provide</h1>
            </div>
            <div className="image-grid">
                <div className="row">
                    <div className='container'>
                        <div className="overlay"><span>20% OFF</span></div>
                        <img className='serviceimg' src={grocery} alt="Image 1" />  
                        <div className="service"><span>Daily Needs</span></div>
                        
                    </div>
                    <div className='container'>
                        <div className="overlay"><span>20% OFF</span></div>
                        <img className='serviceimg' src={construction} alt="Image 1" />  
                        <div className="service"><span>Construction</span></div>
                    </div>
                    <div className='container'>
                        <div className="overlay"><span>20% OFF</span></div>
                        <img className='serviceimg' src={consultancy} alt="Image 1" />  
                        <div className="service"><span>Consultancy</span></div>
                    </div>
                </div>
            </div>
            <div className='icon'>
                <img className='serviceimg' src={icon} alt="icon" />  
            </div>
        </div>
    );
}

export default Category;