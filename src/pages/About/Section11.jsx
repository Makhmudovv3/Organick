import React from 'react';
import './Section11.css';
import aboutSalad from '../../assets/about-section-img.png';
import tractor from "../../assets/tractor-green.png"
import factory from "../../assets/factory-green.png"

const Section11 = () => {
    return (
        <section className="section11-main">
            <div className="container section11-container">
                <div className="section11-image-box">
                    <img src={aboutSalad} alt="Healthy Salad Bowl"
                        fetchpriority="high" />
                </div>

                <div className="section11-content">
                    <p className="section11-subtitle">About Us</p>
                    <h2 className="section11-title">We do Creative Things for Success</h2>

                    <div className="section11-texts">
                        <p>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased
                            to been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley.
                        </p>
                        <p>
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased
                            to been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley.
                        </p>
                    </div>

                    <div className="section11-icons-grid">
                        <div className="s11-icon-item">
                            <div className="s11-icon-img">
                                <img src={tractor} alt="tractor"
                                    fetchpriority="high" />
                            </div>
                            <span>Modern Agriculture Equipment</span>
                        </div>

                        <div className="s11-icon-item">
                            <div className="s11-icon-img">
                                <img src={factory} alt="factory"
                                    fetchpriority="high" />
                            </div>
                            <span>No growth hormones are used</span>
                        </div>
                    </div>

                    <button className="section11-explore-btn">
                        Explore More
                        <span className="btn-circle-arrow">
                            <svg width="12" height="12" viewBox="0 0 19 19" fill="none">
                                <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section11;