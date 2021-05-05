import React from 'react';
import {Link} from 'react-router-dom';
import '../utils/fontawesome';
import Logo from '../assets/img/logo.png';

const Header = () => (
    <header>
        <section className="header-icons-container">
            <div className="icons">                
                <a href="https://www.facebook.com/" target="_blank"><span className="fab fa-facebook"></span></a>
                <a href="https://www.instagram.com/" target="_blank"><span className="fab fa-instagram"></span></a>
                <a href="https://twitter.com/" target="_blank"><span className="fab fa-twitter"></span></a>
                <a href="https://www.linkedin.com/" target="_blank"><span className="fab fa-linkedin"></span></a>
                <a href="https://www.youtube.com/" target="_blank"><span className="fab fa-youtube"></span></a>           
            </div>
        </section>
        <nav>
            <section className="nav-logo-container">
                <Link to="/">
                    <img src={Logo} alt="Logo de Blog"/>
                </Link>
            </section>
            <section className="profile-link">
                <Link to="/profile">
                    Sobre Mi
                </Link>
            </section>
        </nav>
    </header>
);
 
export default Header;