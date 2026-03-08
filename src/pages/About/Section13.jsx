import React from 'react';
import './Section13.css';
import team1 from '../../assets/team-1.png';
import team2 from '../../assets/team-2.png';
import team3 from '../../assets/team-3.png';

const Section13 = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Giovani Bacardo",
            job: "Farmer",
            img: team1
            
        },
        {
            id: 2,
            name: "Marianne Loreno",
            job: "Designer",
            img: team2
        },
        {
            id: 3,
            name: "Riga Peloro",
            job: "Farmer",
            img: team3
        }
    ];

    return (
        <section className="section13-main">
            <div className="container">
                <div className="section13-header">
                    <p className="s13-subtitle">Team</p>
                    <h2 className="s13-title">Our Organic Experts</h2>
                    <p className="s13-desc">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased
                        to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                </div>

                <div className="section13-grid">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="s13-card">
                            <div className="s13-img-box">
                                <img src={member.img} alt={member.name}
                                    fetchpriority="high" />
                            </div>
                            <div className="s13-info">
                                <div>
                                    <h4>{member.name}</h4>
                                    <span>{member.job}</span>
                                </div>
                                <div className="s13-socials">
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section13;