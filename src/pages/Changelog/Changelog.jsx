import React from 'react';
import './Changelog.css';
import changeLogo from '../../assets/change-logo.png';
import changelogBanner from '../../assets/licenses-bg.png';

const Changelog = () => {
    return (
        <div className="change-page">
            <section className="change-header" style={{ backgroundImage: `url(${changelogBanner})` }}>
                <h1>Changelog</h1>
            </section>

            <div className="container">
                <div className="change-card">
                    <div className="change-version-info">
                        <img src={changeLogo} alt="V.1" className="change-icon" />
                        <div className="change-text-group">
                            <h2>V.1</h2>
                            <p>Initial Organick Webflow Template Release</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Changelog;