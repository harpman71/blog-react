import React from 'react';
import ContactImage from '../assets/img/013-newsletter.png'
import NewsImage from '../assets/img/006-like.png'

const Contact = () => (
    <section className="contact-main-container">
        <div>
            <img src={ContactImage} alt=""/>
            <div className="contact-left">
                <a href="mailto:contact@blog.com">Contacto</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div>
            <img src={NewsImage} alt=""/>
            <div className="contact-right">
                <a href="mailto:write@blog.com">Escribe</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section> 
    );
 
export default Contact;