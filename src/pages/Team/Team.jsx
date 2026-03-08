import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Team.css';

import team1 from '../../assets/team-1.png';
import team2 from '../../assets/team-2.png';
import team3 from '../../assets/team-3.png';
import team4 from '../../assets/team-4.png';
import team5 from '../../assets/team-5.png';
import team6 from '../../assets/team-6.png';

const teamData = [
    { id: 1, name: 'Giovani Bacardo', role: 'Farmer', img: team1 },
    { id: 2, name: 'Marianne Bloom', role: 'Designer', img: team2 },
    { id: 3, name: 'Clinton Barker', role: 'Expert', img: team3 },
    { id: 4, name: 'Jamesy Hardon', role: 'Farmer', img: team4 },
    { id: 5, name: 'Keira Knightley', role: 'Farmer', img: team5 },
    { id: 6, name: 'Scott Kelly', role: 'Farmer', img: team6 },
];

const Team = () => {
    return (
        <div className="team-page">
            <section className="team-banner">
                <h1>Our Team</h1>
            </section>

            <div className="container">
                <div className="team-intro">
                    <span className="sub-title">Team</span>
                    <h2>Our Organic Experts</h2>
                    <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>

                <div className="team-grid">
                    {teamData.map((member) => (
                        <div key={member.id} className="team-card">
                            <div className="team-img-holder">
                                <img src={member.img} alt={member.name} />
                            </div>
                            <div className="team-info">
                                <div className="info-text">
                                    <h3>{member.name}</h3>
                                    <span className="role">{member.role}</span>
                                </div>
                                <div className="team-socials">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                        <FaFacebook className="social-icon" />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                        <FaTwitter className="social-icon" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                        <FaInstagram className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;