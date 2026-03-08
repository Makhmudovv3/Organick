import React from 'react';
import { Link } from 'react-router-dom';
import './Section16.css';
import starIcon from '../../assets/star.png';

// Rasmlarni import qilish
import p1 from '../../assets/product-1.png';
import p2 from '../../assets/product-2.png';
import p3 from '../../assets/product-3.png';
import p4 from '../../assets/product-4.png';
import p5 from '../../assets/product-5.png';
import p6 from '../../assets/product-6.png';
import p7 from '../../assets/product-7.png';
import p8 from '../../assets/product-8.png';
import p13 from '../../assets/product-13.png';
import p14 from '../../assets/product-14.png';
import p15 from '../../assets/product-15.png';
import p16 from '../../assets/product-16.png';

const Section16 = () => {
    const products = [
        { id: 1, tag: "Vegetable", name: "Calabrese Broccoli", price: "$13.00", oldPrice: "$20.00", img: p1 },
        { id: 2, tag: "Fresh", name: "Fresh Banana Nut", price: "$14.00", oldPrice: "$20.00", img: p2 },
        { id: 3, tag: "Millets", name: "White Hazelnut", price: "$12.00", oldPrice: "$20.00", img: p3 },
        { id: 4, tag: "Vegetable", name: "Vegan Red Tomato", price: "$17.00", oldPrice: "$20.00", img: p4 },
        { id: 5, tag: "Health", name: "Mung Bean", price: "$11.00", oldPrice: "$20.00", img: p5 },
        { id: 6, tag: "Nuts", name: "Brown Hazelnut", price: "$12.00", oldPrice: "$20.00", img: p6 },
        { id: 7, tag: "Fresh", name: "Eggs", price: "$17.00", oldPrice: "$20.00", img: p7 },
        { id: 8, tag: "Fresh", name: "Zelkova Punch", price: "$15.00", oldPrice: "$20.00", img: p8 },
        { id: 9, tag: "Health", name: "Mung Bean", price: "$11.00", oldPrice: "$20.00", img: p13 },
        { id: 10, tag: "Nuts", name: "White Hazelnut", price: "$12.00", oldPrice: "$20.00", img: p14 },
        { id: 11, tag: "Fresh", name: "Fresh Corn", price: "$17.00", oldPrice: "$20.00", img: p15 },
        { id: 12, tag: "Fresh", name: "Organic Almonds", price: "$15.00", oldPrice: "$20.00", img: p16 },
    ];

    return (
        <section className="section16-main">
            <div className="container">
                <div className="section16-grid">
                    {products.map((item) => (
                        <Link to={`/shop/${item.id}`} key={item.id} className="section16-card">
                            <span className="section16-tag">{item.tag}</span>
                            <div className="section16-img-box">
                                <img src={item.img} alt={item.name} />
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