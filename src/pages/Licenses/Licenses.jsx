import React from 'react';
import './Licenses.css';
import licensesBanner from '../../assets/licenses-bg.png';

const Licenses = () => {
    return (
        <div className="license-page">
            <section className="license-header" style={{ backgroundImage: `url(${licensesBanner})` }}>
                <h1>Licenses</h1>
            </section>

            <div className="container">
                <div className="license-grid">
                    <div className="license-item">
                        <div className="license-left">
                            <h2>Icon & Graphics</h2>
                        </div>
                        <div className="license-right">
                            <p>Icons and Graphics are manually designed by the <span>Victoflow</span> Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.</p>
                            <p>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
                        </div>
                    </div>

                    <div className="license-item">
                        <div className="license-left">
                            <h2>Photography</h2>
                        </div>
                        <div className="license-right">
                            <p>All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels, And Freepik.</p>

                            <div className="license-sub-section">
                                <h3>Unsplash</h3>
                                <p>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25.</p>
                            </div>

                            <div className="license-sub-section">
                                <h3>Pixcel</h3>
                                <p>Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17.</p>
                            </div>
                        </div>
                    </div>

                    <div className="license-item">
                        <div className="license-left">
                            <h2>Font</h2>
                        </div>
                        <div className="license-right">
                            <p>Organick template uses free licensed Google Fonts. Please check <span>Roboto</span>, <span>Yellowtail</span> and <span>Open Sans</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Licenses;