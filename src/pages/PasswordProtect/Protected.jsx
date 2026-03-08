import React from 'react';
import './Protected.css';
import protectedImg from '../../assets/protected-flower.png'; 

const Protected = () => {
    return (
        <div className="prot-page">
            <section className="prot-header">
                <h1>Protected Page</h1>
            </section>

            <div className="container">
                <div className="prot-card">
                    <div className="prot-img-side">
                        <img src={protectedImg} alt="Protected" />
                    </div>
                    <form className="prot-form-side">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Your Password" required />
                        <button type="submit" className="prot-btn">
                            Send Now <span>→</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Protected;