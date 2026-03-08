import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShopSingle.css';
import starIcon from '../../assets/star.png';

const ShopSingle = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('description');

    const products = [
        { id: 1, tag: "Vegetable", name: "Calabrese Broccoli", price: "$13.00", oldPrice: "$20.00", img: 'product-1.png' },
        { id: 2, tag: "Fresh", name: "Fresh Banana Nut", price: "$14.00", oldPrice: "$20.00", img: 'product-2.png' },
        { id: 3, tag: "Millets", name: "White Hazelnut", price: "$12.00", oldPrice: "$20.00", img: 'product-3.png' },
        { id: 4, tag: "Vegetable", name: "Vegan Red Tomato", price: "$17.00", oldPrice: "$20.00", img: 'product-4.png' },
        { id: 5, tag: "Health", name: "Mung Bean", price: "$11.00", oldPrice: "$20.00", img: 'product-5.png' },
        { id: 6, tag: "Nuts", name: "Brown Hazelnut", price: "$12.00", oldPrice: "$20.00", img: 'product-6.png' },
        { id: 7, tag: "Fresh", name: "Eggs", price: "$17.00", oldPrice: "$20.00", img: 'product-7.png' },
        { id: 8, tag: "Fresh", name: "Zelkova Punch", price: "$15.00", oldPrice: "$20.00", img: 'product-8.png' },
        { id: 9, tag: "Health", name: "Mung Bean", price: "$11.00", oldPrice: "$20.00", img: 'product-13.png' },
        { id: 10, tag: "Nuts", name: "White Hazelnut", price: "$12.00", oldPrice: "$20.00", img: 'product-14.png' },
        { id: 11, tag: "Fresh", name: "Fresh Corn", price: "$17.00", oldPrice: "$20.00", img: 'product-15.png' },
        { id: 12, tag: "Fresh", name: "Organic Almonds", price: "$15.00", oldPrice: "$20.00", img: 'product-16.png' },
    ];

    const product = products.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="container">Product not found!</div>;

    const relatedProducts = products.slice(0, 4);

    return (
        <div className="shop-single-page">
            <section className="ss-banner-bg">
                <h1>Shop Single</h1>
            </section>

            <div className="container">
                {/* Product Detail Section */}
                <section className="ss-product-detail section-padding">
                    <div className="ss-grid">
                        <div className="ss-img-container">
                            <span className="ss-category-tag">{product.tag}</span>
                            <img src={`/src/assets/${product.img}`} alt={product.name} />
                        </div>
                        <div className="ss-info-container">
                            <h2 className="ss-product-name">{product.name}</h2>
                            <div className="ss-stars">
                                <img src={starIcon} alt="rating" />
                            </div>
                            <div className="ss-price-row">
                                <span className="ss-old-p">{product.oldPrice}</span>
                                <span className="ss-new-p">{product.price}</span>
                            </div>
                            <p className="ss-main-desc">
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                            <div className="ss-cart-row">
                                <div className="ss-qty-input">
                                    <label>Quantity :</label>
                                    <input type="number" defaultValue="1" min="1" />
                                </div>
                                <button className="ss-add-cart-btn">
                                    Add To Cart
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                                        <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
                                        <path d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="ss-tabs-area">
                    <div className="ss-tabs-nav">
                        <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Product Description</button>
                        <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Additional Info</button>
                    </div>
                    <div className="ss-tabs-body">
                        {activeTab === 'description' ? (
                            <p>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
                        ) : (
                            <p>Additional details regarding farm-to-table logistics and organic certifications.</p>
                        )}
                    </div>
                </section>

                <section className="ss-related-area section-padding">
                    <h2 className="ss-related-title">Related Products</h2>
                    <div className="section16-grid">
                        {relatedProducts.map((item) => (
                            <Link to={`/shop/${item.id}`} key={item.id} className="section16-card">
                                <span className="section16-tag">{item.tag}</span>
                                <div className="section16-img-box"><img src={`/src/assets/${item.img}`} alt={item.name} /></div>
                                <div className="section16-info">
                                    <h4 className="section16-name">{item.name}</h4>
                                    <div className="section16-footer">
                                        <div className="section16-prices"><span className="section16-old">{item.oldPrice}</span><span className="section16-new">{item.price}</span></div>
                                        <div className="section16-rating"><img src={starIcon} alt="rating" /></div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ShopSingle;