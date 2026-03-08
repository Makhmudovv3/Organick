import React from 'react';
import './Section7.css';
import ecoImg from '../../assets/eco-friendly.png';

const Section7 = () => {
    return (
        <section className="section7-main">
            <div className="section7-container">
                <div className="section7-image-side">
                    <img src={ecoImg} alt="Eco Friendly Farm" />
                </div>

                <div className="section7-content-card">
                    <p className="section7-subtitle">Eco Friendly</p>
                    <h2 className="section7-title">Econis is a Friendly Organic Store</h2>

                    <div className="section7-info-group">
                        <h4 className="section7-info-title">Start with Our Company First</h4>
                        <p className="section7-info-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                            doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>

                    <div className="section7-info-group">
                        <h4 className="section7-info-title">Learn How to Grow Yourself</h4>
                        <p className="section7-info-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                            doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>

                    <div className="section7-info-group">
                        <h4 className="section7-info-title">Farming Strategies of Today</h4>
                        <p className="section7-info-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
                            doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section7;