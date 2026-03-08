import React from 'react';
import { Link } from 'react-router-dom';
import './Section20.css';
import centerProduct from '../../assets/center-pistachio.png';
import serviceIcon1 from '../../assets/service-1.png';
import serviceIcon2 from '../../assets/service-2.png';
import serviceIcon3 from '../../assets/service-3.png';
import serviceIcon4 from '../../assets/service-4.png';
import serviceIcon5 from '../../assets/service-5.png';
import serviceIcon6 from '../../assets/service-6.png';

const Section20 = () => {
    return (
        <section className="section20-main section-padding">
            <div className="container">
                <div className="s20-header">
                    <span className="sub-title">What we Grow</span>
                    <h2 className="main-title">Better Agriculture for <br /> Better Future</h2>
                </div>

                <div className="s20-content-wrapper">
                    <div className="s20-side-col left-side">
                        <div className="s20-item">
                            <img src={serviceIcon1} alt="icon" />
                            <h4>Dairy Products</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque.</p>
                        </div>
                        <div className="s20-item">
                            <img src={serviceIcon2} alt="icon" />
                            <h4>Store Services</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque.</p>
                        </div>
                        <div className="s20-item">
                            <img src={serviceIcon3} alt="icon" />
                            <h4>Delivery Services</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque.</p>
                        </div>
                    </div>

                    <div className="s20-center-img">
                        <img src={centerProduct} alt="Organic Product" />
                    </div>

                    <div className="s20-side-col right-side">
                        <div className="s20-item">
                            <img src={serviceIcon4} alt="icon" />
                            <h4>Agricultural Services</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque.</p>
                        </div>
                        <div className="s20-item">
                            <img src={serviceIcon5} alt="icon" />
                            <h4>Organic Products</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque.</p>
                        </div>
                        <div className="s20-item">
                            <img src={serviceIcon6} alt="icon" />
                            <h4>Fresh Vegetables</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque.</p>
                        </div>
                    </div>
                </div>

                <div className="s20-footer-btn">
                    <Link to="/service-single" className="explore-more-btn" style={{ textDecoration: 'none' }}>
                        Explore More
                        <span className="btn-arrow">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Section20;