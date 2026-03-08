import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioData } from '../Porfolio/Portfolio';
import './PortfolioSingle.css';

const PortfolioSingle = () => {
    const { id } = useParams();
    const item = portfolioData.find(p => p.id === parseInt(id));

    if (!item) {
        return <div className="container" style={{ padding: "100px 0" }}><h2>Mahsulot topilmadi!</h2></div>;
    }

    return (
        <div className="portfolio-single-page">
            <section className="ps-banner">
                <img src={item.img} alt={item.title} className="ps-banner-img" />

                <div className="container">
                    <div className="ps-info-card">
                        <div className="ps-card-main">
                            <h1>{item.title}</h1>
                            <p>Established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                        </div>
                        <div className="ps-card-meta">
                            <div className="meta-row">
                                <strong>Date</strong> <span>: {item.date}</span>
                            </div>
                            <div className="meta-row">
                                <strong>Client</strong> <span>: {item.client}</span>
                            </div>
                            <div className="meta-row">
                                <strong>Category</strong> <span>: {item.category}</span>
                            </div>
                            <div className="meta-row">
                                <strong>Service</strong> <span>: {item.service}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="ps-content-body">
                    <div className="ps-text-block">
                        <h2>About The Farm:</h2>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                    </div>

                    <div className="ps-center-image">
                        <img src={item.img} alt="Farm production" />
                        <p className="caption">The Organic Products</p>
                    </div>

                    <div className="ps-text-block">
                        <h2>How To Farm:</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                    </div>

                    <div className="ps-text-block">
                        <h2>Conclusion:</h2>
                        <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSingle;