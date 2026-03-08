import React from 'react';
import { useNavigate } from 'react-router-dom';
import flowers from '../../assets/404-flowers.png';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="found-container">
            <div className="found-content-wrapper">
                <div className="found-image-box">
                    <img src={flowers} alt="flowers" className="found-flowers-img" />
                </div>

                <div className="found-right-side">
                    <h1 className="found-title">404</h1>
                    <h2 className="found-subtitle">Page not found</h2>
                    <p className="found-text">
                        The page you are looking for doesn't exist or has been moved
                    </p>
                    <button
                        className="found-btn"
                        onClick={() => navigate('/')}
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;