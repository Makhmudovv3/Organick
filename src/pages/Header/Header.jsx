import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';
import logo from '../../assets/Logo.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsPagesOpen(false);
    };

    return (
        <header className="header-main">
            <div className="header-container">
                <Link to="/" className="header-logo" onClick={closeAll}>
                    <img src={logo} alt="Organick Logo" fetchpriority="high" />
                    <span>Organick</span>
                </Link>

                <nav className={`header-nav ${isMenuOpen ? 'header-nav-active' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={closeAll}>Home</Link></li>
                        <li><Link to="/about" onClick={closeAll}>About</Link></li>

                        <li
                            className="header-dropdown"
                            onMouseEnter={() => window.innerWidth > 900 && setIsPagesOpen(true)}
                            onMouseLeave={() => window.innerWidth > 900 && setIsPagesOpen(false)}
                            onClick={() => window.innerWidth <= 900 && setIsPagesOpen(!isPagesOpen)}
                        >
                            <span className="dropdown-trigger">
                                Pages <ChevronDown size={14} style={{ transform: isPagesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                            </span>
                            <ul className={`dropdown-menu ${isPagesOpen ? 'show' : ''}`}>
                                <li><Link to="/service" onClick={closeAll}>Services</Link></li>
                                <li><Link to="/portfolio" onClick={closeAll}>Portfolio</Link></li>
                                <li><Link to="/team" onClick={closeAll}>Team</Link></li>
                                <li><Link to="/blog" onClick={closeAll}>Blog</Link></li>
                                <li><Link to="/licenses" onClick={closeAll}>Licenses</Link></li>
                                <li><Link to="/changelog" onClick={closeAll}>Changelog</Link></li>
                                <li><Link to="/protected" onClick={closeAll}>Protected</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/shop" onClick={closeAll}>Shop</Link></li>
                        <li><Link to="/contact" onClick={closeAll}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <div className="header-search-bar">
                        <input type="text" />
                        <div className="header-search-icon">
                            <Search size={18} color="white" />
                        </div>
                    </div>

                    <Link to="/cart" className="header-cart" onClick={closeAll}>
                        <div className="header-cart-icon">
                            <ShoppingCart size={18} color="white" fill="white" />
                        </div>
                        <span className="header-cart-text">Cart (0)</span>
                    </Link>

                    <button className="header-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} color="#274C5B" /> : <Menu size={28} color="#274C5B" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;