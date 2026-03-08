import React from 'react';
import { Link } from 'react-router-dom';
import './Section16.css';
import starIcon from '../../assets/star.png';

const Section16 = () => {
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

    return (
        <section className="section16-main">
            <div className="container">
                <div className="section16-grid">
                    {products.map((item) => (
                        <Link to={`/shop/${item.id}`} key={item.id} className="section16-card">
                            <span className="section16-tag">{item.tag}</span>
                            <div className="section16-img-box">
                                <img src={`/src/assets/${item.img}`} alt={item.name} />
                            </div>
                            <div className="section16-info">
                                <h4 className="section16-name">{item.name}</h4>
                                <div className="section16-footer">
                                    <div className="section16-prices">
                                        <span className="section16-old">{item.oldPrice}</span>
                                        <span className="section16-new">{item.price}</span>
                                    </div>
                                    <div className="section16-rating">
                                        <img src={starIcon} alt="rating" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section16;