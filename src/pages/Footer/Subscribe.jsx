import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <section className="subscribe-section">
            <div className="subscribe-container">
                <div className="subscribe-content">
                    <h2 className="subscribe-title">
                        Subscribe to <br /> our Newsletter
                    </h2>
                    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="subscribe-input"
                            required
                        />
                        <button type="submit" className="subscribe-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;