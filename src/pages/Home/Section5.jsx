import React from 'react';
import './Section5.css';
import clientImg from '../../assets/client-img.webp';
import star from '../../assets/star.png';

const Section5 = () => {
    return (
        <section className="section5-main">
            <div className="container">
                <div className="section5-header">
                    <p className="section5-subtitle">Testimonial</p>
                    <h2 className="section5-title">What Our Customer Saying?</h2>

                    <div className="section5-client-info">
                        <img src={clientImg} alt="Client"
                            fetchpriority="high"
                            className="section5-client-thumb" />
                        <div className="section5-rating">
                            <img src={star} alt="star" fetchpriority="high" />
                        </div>
                        <p className="section5-text">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <h4 className="section5-client-name">Sara Taylor</h4>
                        <p className="section5-client-role">Consumer</p>
                    </div>
                </div>

                <div className="section5-stats-grid">
                    <div className="section5-stat-item">
                        <div className="section5-stat-circle">
                            <h2>100%</h2>
                            <p>Organic</p>
                        </div>
                    </div>
                    <div className="section5-stat-item">
                        <div className="section5-stat-circle">
                            <h2>285</h2>
                            <p>Active Product</p>
                        </div>
                    </div>
                    <div className="section5-stat-item">
                        <div className="section5-stat-circle">
                            <h2>350+</h2>
                            <p>Organic Orchards</p>
                        </div>
                    </div>
                    <div className="section5-stat-item">
                        <div className="section5-stat-circle">
                            <h2>25+</h2>
                            <p>Years of Farming</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;