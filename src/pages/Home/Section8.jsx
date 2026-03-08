import React from 'react';
import './Section8.css';

const Section8 = () => {
    return (
        <section className="section8-main">
            <div className="container">
                <div className="section8-grid">
                    <div className="section8-item section8-juice">
                        <div className="section8-label">Organic Juice</div>
                    </div>

                    <div className="section8-item section8-food">
                        <div className="section8-label">Organic Food</div>
                    </div>

                    <div className="section8-item section8-cookies">
                        <div className="section8-label">Nuts Cookies</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;