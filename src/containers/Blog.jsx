import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Contact from '../components/Contact';
import AppContext from '../context/AppContext';

const Blog = ({ match }) => {
    const {post} = useContext(AppContext);  
    let { id } = match.params;

    const result = post.filter((a) => a.id_post == id) ;
    
    return(
        <main>
            <section className="grid-container blogpost-img-container">
                <img src={`http://placeimg.com/640/480/tech/${result[0].id_post}`} alt={result[0].title}/>
            </section>
            <section className="blogpost-main-container">
                <div className="grid-container">                    
                    <article>
                        <h1>{result[0].title}</h1>
                        <p>{result[0].post}</p>
                        <Link to="/blogs">
                            <button className="blogs-button">Volver</button>
                        </Link>
                    </article>
                </div>
            </section>  
            <Contact/>     
        </main>
        );
    }

export default Blog;