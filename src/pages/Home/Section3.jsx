import React from 'react';
import './Section3.css';
import aboutImg from '../../assets/about-img.webp';
import icon1 from '../../assets/about-icon-1.png';
import icon2 from '../../assets/about-icon-2.png';

const Section3 = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-wrapper">
                    <div className="about-image">
                        <img src={aboutImg} alt="About Organick" />
                    </div>

                    <div className="about-content">
                        <p className="about-subtitle">About Us</p>
                        <h2 className="about-title">We Believe in Working Accredited Farmers</h2>
                        <p className="about-text">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased
                            to been the industry's standard dummy text ever since the 1500s.
                        </p>

                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <img src={icon1} alt="Icon" />
                                </div>
                                <div className="feature-info">
                                    <h4>Organic Foods Only</h4>
                                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <img src={icon2} alt="Icon" />
                                </div>
                                <div className="feature-info">
                                    <h4>Quality Standards</h4>
                                    <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>

                        <button className="btn-dark">
                            Shop Now
                            <span className="btn-arrow">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                    <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;