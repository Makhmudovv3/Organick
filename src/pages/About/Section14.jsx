import React from 'react';
import './Section14.css';
import offer1 from '../../assets/offer-1.png';
import offer2 from '../../assets/offer-2.png';
import offer3 from '../../assets/offer-3.png';
import offer4 from '../../assets/offer-4.png';

const Section14 = () => {
    const offers = [
        { id: 1, title: "Spicy", img: offer1 },
        { id: 2, title: "Nuts & Feesd", img: offer2 },
        { id: 3, title: "Fruits", img: offer3 },
        { id: 4, title: "Vegetable", img: offer4 }
    ];

    return (
        <section className="section14-main">
            <div className="container">
                <div className="section14-header">
                    <p className="s14-subtitle">About Us</p>
                    <h2 className="s14-title">What We Offer for You</h2>
                </div>

                <div className="section14-grid">
                    {offers.map((item) => (
                        <div key={item.id} className="s14-card">
                            <div className="s14-img-box">
                                <img src={item.img} alt={item.title}
                                    fetchpriority="high" />
                            </div>
                            <h4 className="s14-card-title">{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section14;