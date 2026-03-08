import React from 'react';
import './Section1.css';

const Section1 = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h3 className="hero-subtitle">100% Natural Food</h3>
                    <h1 className="hero-title">Choose the best healthier way of life</h1>
                    <button className="btn-yellow">
                        Explore Now
                        <span className="btn-arrow">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Section1;