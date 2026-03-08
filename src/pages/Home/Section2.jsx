import React from 'react';
import './Section2.css';

const Section2 = () => {
    return (
        <section className="offers-section">
            <div className="container">
                <div className="offers-grid">
                    <div className="offer-card natural-card">
                        <div className="offer-content">
                            <p className="offer-subtitle">Natural!!</p>
                            <h2 className="offer-title">Get Garden Fresh Fruits</h2>
                        </div>
                    </div>

                    <div className="offer-card offer-card-green">
                        <div className="offer-content">
                            <p className="offer-subtitle text-green">Offer!!</p>
                            <h2 className="offer-title text-dark">Get 10% off on Vegetables</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;