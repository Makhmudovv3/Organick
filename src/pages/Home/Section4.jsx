import React from 'react';
import './Section4.css';
import star from '../../assets/star.png';

const products = [
    { id: 1, tag: 'Vegetable', name: 'Calabrese Broccoli', price: '$13.00', oldPrice: '$20.00', img: 'product-1.png' },
    { id: 2, tag: 'Vegetable', name: 'Fresh Corn', price: '$17.00', oldPrice: '$20.00', img: 'product-2.png' },
    { id: 3, tag: 'Millets', name: 'Dried Pistachio', price: '$7.00', oldPrice: '$20.00', img: 'product-3.png' },
    { id: 4, tag: 'Vegetable', name: 'Vegan Red Tomato', price: '$17.00', oldPrice: '$20.00', img: 'product-4.png' },
    { id: 5, tag: 'Health', name: 'Almonds', price: '$15.00', oldPrice: '$20.00', img: 'product-5.png' },
    { id: 6, tag: 'Nuts', name: 'Brown Hazelnut', price: '$12.00', oldPrice: '$20.00', img: 'product-6.png' },
    { id: 7, tag: 'Fresh', name: 'Eggs', price: '$17.00', oldPrice: '$20.00', img: 'product-7.png' },
    { id: 8, tag: 'Fresh', name: 'Zelani Potato', price: '$11.00', oldPrice: '$20.00', img: 'product-8.png' }
];

const Section4 = () => {
    return (
        <section className="shop-section">
            <div className="container">
                <div className="shop-header">
                    <p className="shop-subtitle">Categories</p>
                    <h2 className="shop-title">Our Products</h2>
                </div>

                <div className="products-grid">
                    {products.map((item) => (
                        <div key={item.id} className="product-card">
                            <span className="product-tag">{item.tag}</span>
                            <div className="product-image">
                                <img src={`/src/assets/${item.img}`} alt={item.name} />
                            </div>
                            <div className="product-info">
                                <h4 className="product-name">{item.name}</h4>
                                <div className="product-footer">
                                    <div className="product-prices">
                                        <span className="old-price">{item.oldPrice}</span>
                                        <span className="current-price">{item.price}</span>
                                    </div>
                                    <div className="product-rating">
                                        <img src={star} alt="rating" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="shop-actions">
                    <button className="btn-dark">
                        Load More
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

export default Section4;