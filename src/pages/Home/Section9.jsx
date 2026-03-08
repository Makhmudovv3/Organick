import React from 'react';
import './Section9.css';
import { FaUser } from 'react-icons/fa';

const Section9 = () => {
    return (
        <section className="section9-main">
            <div className="container">
                <div className="section9-header">
                    <div className="section9-titles">
                        <p className="section9-subtitle">News</p>
                        <h2 className="section9-title">Discover weekly content about organic food, & more</h2>
                    </div>
                    <button className="section9-btn">
                        More News
                        <span className="section9-btn-icon">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="section9-grid">
                    <div className="section9-card section9-card-1">
                        <div className="section9-date-badge">
                            <span className="section9-day">25</span>
                            <span className="section9-month">Nov</span>
                        </div>
                        <div className="section9-content-box">
                            <div className="section9-meta">
                                <span className="section9-user-icon"><FaUser /></span>
                                <span className="section9-author-name">By Racheal Cardon</span>
                            </div>
                            <h4 className="section9-card-title">The Benefits of Vitamin D & How to Get It</h4>
                            <p className="section9-card-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

                            <button className="section9-read-more">
                                Read More
                                <span className="section9-arrow-circle">
                                    <svg width="15" height="15" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="section9-card section9-card-2">
                        <div className="section9-date-badge">
                            <span className="section9-day">25</span>
                            <span className="section9-month">Nov</span>
                        </div>
                        <div className="section9-content-box">
                            <div className="section9-meta">
                                <span className="section9-user-icon"><FaUser /></span>
                                <span className="section9-author-name">By Racheal Cardon</span>
                            </div>
                            <h4 className="section9-card-title">Our Favorite Summertime Tomato</h4>
                            <p className="section9-card-text">Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>

                            <button className="section9-read-more">
                                Read More
                                <span className="section9-arrow-circle">
                                    <svg width="15" height="15" viewBox="0 0 19 19" fill="none">
                                        <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section9;