import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <main className="home-main">
        <section>
            <p className="home-main-text">
                Conoce las novedades y noticias del Mundo Tech
            </p>
            <button className="home-main-button">
                <Link to="blogs">
                    Entra ya!!
                </Link>
            </button>
        </section>
    </main>
    );
 
export default Home;