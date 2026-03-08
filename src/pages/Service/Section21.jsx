import React from 'react';
import './Section21.css';

const Section21 = () => {
    return (
        <section className="section21-video">
            <div className="container">
                <div className="s21-video-content">
                    <span className="s21-subtitle">Organic Only</span>
                    <h2 className="s21-title">Everyday Fresh & Clean</h2>
                    <p className="s21-text">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased
                        to been the industry's standard dummy text ever since the
                    </p>

                    <div className="s21-play-wrapper">
                        <button className="s21-play-btn">
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                                <path d="M24 14L0 28V0L24 14Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section21;