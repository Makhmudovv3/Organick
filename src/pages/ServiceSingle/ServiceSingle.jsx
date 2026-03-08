import React from 'react';
import './ServiceSingle.css';
import serviceDetailImg from '../../assets/service-detail.png';
import sideImg1 from '../../assets/service-side-1.png';
import sideImg2 from '../../assets/service-side-2.png';

const ServiceSingle = () => {
    return (
        <div className="service-single-page">
            <section className="service-single-banner">
                <h1>Quality Standard</h1>
            </section>

            <div className="container">
                <section className="service-content-wrapper">
                    <div className="service-main-img-holder">
                        <img src={serviceDetailImg} alt="Organic Store" />
                    </div>

                    <div className="service-info-text">
                        <h2>Organic Store Services</h2>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <p>
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years.
                        </p>
                    </div>

                    <div className="service-feature-grid">
                        <div className="feature-item">
                            <div className="feature-img">
                                <img src={sideImg1} alt="Why Organic" />
                            </div>
                            <div className="feature-desc">
                                <h3>Why Organic</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                            </div>
                        </div>

                        <div className="feature-item reverse">
                            <div className="feature-desc">
                                <h3>Speciality Produce</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                            </div>
                            <div className="feature-img">
                                <img src={sideImg2} alt="Speciality" />
                            </div>
                        </div>
                    </div>

                    <div className="service-bottom-section">
                        <h3>We farm your land</h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>

                        <div className="service-steps-row">
                            <div className="step-card">
                                <div className="step-num">01</div>
                                <span className="step-title">Best quality support</span>
                            </div>
                            <div className="step-card">
                                <div className="step-num">02</div>
                                <span className="step-title">Money back guarantee</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ServiceSingle;