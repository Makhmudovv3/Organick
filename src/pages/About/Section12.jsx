import React from 'react';
import './Section12.css';
import whyChooseImg from '../../assets/why-choose.png';
import cart from "../../assets/cart.png"
import leaf from "../../assets/leaf.png"
import clock from "../../assets/clock.png"
import card from "../../assets/card.png"

const Section12 = () => {
    const cards = [
        { id: 1, title: "Return Policy", icon: cart },
        { id: 2, title: "100% Fresh", icon: leaf },
        { id: 3, title: "Support 24/7", icon: clock },
        { id: 4, title: "Secured Payment", icon: card }
    ];

    return (
        <section className="section12-main">
            <div className="container">
                <div className="s12-top-grid">
                    <div className="s12-content">
                        <p className="s12-subtitle">Why Choose us?</p>
                        <h2 className="s12-title">We do not buy from the open market & traders.</h2>
                        <p className="s12-desc">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased
                            to been the industry's standard the 1500s, when an unknown
                        </p>

                        <div className="s12-points">
                            <div className="s12-point-item">
                                <div className="s12-point-header">
                                    <div className="s12-dot"></div>
                                    <span>100% Natural Product</span>
                                </div>
                                <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                            </div>

                            <div className="s12-point-item">
                                <div className="s12-point-header">
                                    <div className="s12-dot"></div>
                                    <span>Increases resistance</span>
                                </div>
                                <p>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
                            </div>
                        </div>
                    </div>

                    <div className="s12-image">
                        <img src={whyChooseImg} alt="Fresh vegetables"
                            fetchpriority="high" />
                    </div>
                </div>

                <div className="s12-cards-grid">
                    {cards.map(card => (
                        <div key={card.id} className="s12-card">
                            <div className="s12-icon-box">
                                <img src={card.icon} alt={card.title}
                                    fetchpriority="high" />
                            </div>
                            <h4>{card.title}</h4>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section12;