import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { HiOutlineMailOpen, HiOutlinePhone } from 'react-icons/hi';
import './Contact.css';

import contactBanner from '../../assets/contact-banner.jpg';
import fruitImg from '../../assets/contact-fruit.jpg';
import leafBg from '../../assets/leaf-bg.jpg';

const Contact = () => {
    const [status, setStatus] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const token = "8481072431:AAHUQjU2ZNd2b9MiuV1olxhRtAJha5lrGi4";
        const chatId = "6205699347";
        const { name, email, company, subject, message } = e.target.elements;

        const text = `🚀 New Message!\n👤 Name: ${name.value}\n📧 Email: ${email.value}\n🏢 Company: ${company.value}\n📌 Subject: ${subject.value}\n💬 Message: ${message.value}`;

        try {
            const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" })
            });
            if (res.ok) {
                setStatus("Success! Your message has been sent.");
                e.target.reset();
            } else { setStatus("Error! Please try again."); }
        } catch { setStatus("Network Error!"); }
    };

    return (
        <div className="contact-page">
            <section className="contact-header" style={{ backgroundImage: `url(${contactBanner})` }}>
                <h1>Contact Us</h1>
            </section>

            <div className="container">
                <div className="contact-top-grid">
                    <div className="contact-main-img">
                        <img src={fruitImg} alt="Fruits" />
                    </div>
                    <div className="contact-details">
                        <h2>We'd love to talk about how we can work together.</h2>
                        <p className="description">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                        <div className="info-box">
                            <div className="info-item">
                                <div className="icon-wrapper"><HiOutlineMailOpen /></div>
                                <div>
                                    <h4>Message</h4>
                                    <p>support@organic.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-wrapper"><HiOutlinePhone /></div>
                                <div>
                                    <h4>Contact Us</h4>
                                    <p>+01 123 456 789</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaPinterest /></a>
                        </div>
                    </div>
                </div>

                <div className="location-banner" style={{ backgroundImage: `url(${leafBg})` }}>
                    <div className="location-card">
                        <span className="location-tag">Location</span>
                        <h2>Our Farms</h2>
                        <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>

                        <div className="loc-detail">
                            <p><strong>New York, USA:</strong><br />299 Park Avenue New York,<br />New York 10171</p>
                        </div>
                        <div className="loc-detail">
                            <p><strong>London, UK:</strong><br />30 Stamford Street,<br />London SE1 9LQ</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form-main" onSubmit={sendMessage}>
                    <div className="input-grid">
                        <div className="input-group">
                            <label>Full Name*</label>
                            <input name="name" type="text" placeholder="Your Email Address" required />
                        </div>
                        <div className="input-group">
                            <label>Your Email*</label>
                            <input name="email" type="email" placeholder="example@yourmail.com" required />
                        </div>
                        <div className="input-group">
                            <label>Company*</label>
                            <input name="company" type="text" placeholder="yourcompany name here" required />
                        </div>
                        <div className="input-group">
                            <label>Subject*</label>
                            <input name="subject" type="text" placeholder="how can we help" required />
                        </div>
                    </div>
                    <div className="input-group full-width">
                        <label>Message*</label>
                        <textarea name="message" placeholder="hello there, i would like to talk about..." required></textarea>
                    </div>
                    <button type="submit" className="btn-send">Send Message</button>
                    {status && <p className="status-msg">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;