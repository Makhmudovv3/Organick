import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import logo from "../../assets/Logo.webp"

const Footer = () => {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col footer-contact">
                        <h4 className="footer-label">Contact Us</h4>
                        <div className="footer-item">
                            <h5>Email</h5>
                            <p>needhelp@Organia.com</p>
                        </div>
                        <div className="footer-item">
                            <h5>Phone</h5>
                            <p>666 888 888</p>
                        </div>
                        <div className="footer-item">
                            <h5>Address</h5>
                            <p>88 road, borklyn street, USA</p>
                        </div>
                    </div>

                    <div className="footer-col footer-center">
                        <div className="footer-logo">
                            <img src={logo} alt="Organia" />
                            <span>Organick</span>
                        </div>
                        <p className="footer-desc">
                            Simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum simply dummy text of the printing
                        </p>
                        <div className="footer-socials">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaPinterest /></a>
                        </div>
                    </div>

                    <div className="footer-col footer-links">
                        <h4 className="footer-label">Utility Pages</h4>
                        <ul>
                            <li>Style Guide</li>
                            <li>404 Not Found</li>
                            <li>Password Protected</li>
                            <li>Licences</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright © <b>Organick</b></p>
            </div>
        </footer>
    );
};

export default Footer;