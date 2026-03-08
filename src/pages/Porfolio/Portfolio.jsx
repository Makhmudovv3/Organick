import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import img1 from '../../assets/portfolio-1.png';
import img2 from '../../assets/portfolio-2.png';
import img3 from '../../assets/portfolio-3.png';
import img4 from '../../assets/portfolio-4.png';
import img5 from '../../assets/portfolio-5.png';
import img6 from '../../assets/portfolio-6.png';

export const portfolioData = [
    {
        id: 1,
        title: 'Green & Tasty Lemon',
        category: 'Fruits',
        img: img1,
        date: 'December 4, 2022',
        client: 'Kevin Andrews',
        service: 'Organic Juice',
        desc: 'This is a detailed description about Green & Tasty Lemon.'
    },
    {
        id: 2,
        title: 'Organic Carrot',
        category: 'Farmer',
        img: img2,
        date: 'November 20, 2022',
        client: 'Marianne Bloom',
        service: 'Fresh Vegetables',
        desc: 'Organic carrots are rich in vitamins and minerals.'
    },
    {
        id: 3,
        title: 'Organic Betel Leaf',
        category: 'Leaf',
        img: img3,
        date: 'October 15, 2022',
        client: 'John Doe',
        service: 'Natural Herbs',
        desc: 'Organic betel leaves are grown without synthetic pesticides.'
    },
    {
        id: 4,
        title: 'Natural Tomato',
        category: 'Fruits',
        img: img4,
        date: 'September 10, 2022',
        client: 'Sarah Jenkins',
        service: 'Healthy Food',
        desc: 'Our natural tomatoes are sun-ripened and hand-picked.'
    },
    {
        id: 5,
        title: 'Black Raspberry',
        category: 'Farmer',
        img: img5,
        date: 'August 25, 2022',
        client: 'Kevin Andrews',
        service: 'Organic Products',
        desc: 'Black raspberries are a superfood packed with antioxidants.'
    },
    {
        id: 6,
        title: 'Honey Orange',
        category: 'Farmer',
        img: img6,
        date: 'July 18, 2022',
        client: 'Michael Ross',
        service: 'Sweet Fruits',
        desc: 'Honey oranges are known for their exceptional sweetness.'
    }
];

const Portfolio = () => {
    return (
        <div className="portfolio-page">
            <section className="portfolio-banner">
                <h1>Portfolio Standard</h1>
            </section>

            <section className="container">
                <div className="portfolio-grid">
                    {portfolioData.map((item) => (
                        <div key={item.id} className="portfolio-item">
                            <div className="portfolio-img-holder">
                                <img src={item.img} alt={item.title} />
                                <div className="portfolio-overlay">
                                    <Link to={`/portfolio/${item.id}`} className="view-btn">
                                        <span>&gt;</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;