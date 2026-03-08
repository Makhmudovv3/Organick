import React from 'react';
import './Section6.css';
import star from '../../assets/star.png';

import product9 from '../../assets/product-9.png';
import product10 from '../../assets/product-10.png';
import product11 from '../../assets/product-11.png';
import product12 from '../../assets/product-12.png';

const offerProducts = [
    { id: 1, tag: 'Vegetable', name: 'Mung Bean', price: '$11.00', oldPrice: '$20.00', img: product9 },
    { id: 2, tag: 'Vegetable', name: 'Brown Hazelnut', price: '$12.00', oldPrice: '$20.00', img: product10 },
    { id: 3, tag: 'Vegetable', name: 'Onion', price: '$17.00', oldPrice: '$20.00', img: product11 },
    { id: 4, tag: 'Vegetable', name: 'Cabbage', price: '$17.00', oldPrice: '$20.00', img: product12 }
];

const Section6 = () => {
    return (
        <section className="section6-main">
            <div className="container">
                <div className="section6-header">
                    <div className="section6-titles">
                        <p className="section6-subtitle">Offer</p>
                        <h2 className="section6-title">We Offer Organic For You</h2>
                    </div>
                    <button className="section6-btn">
                        View All Product
                        <span className="btn-arrow">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>

                <div className="section6-grid">
                    {offerProducts.map((item) => (
                        <div key={item.id} className="section6-card">
                            <span className="section6-tag">{item.tag}</span>
                            <div className="section6-image">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="section6-info">
                                <h4 className="section6-name">{item.name}</h4>
                                <div className="section6-footer">
                                    <div className="section6-prices">
                                        <span className="section6-old">{item.oldPrice}</span>
                                        <span className="section6-current">{item.price}</span>
                                    </div>
                                    <div className="section6-rating">
                                        <img src={star} alt="rating" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section6;