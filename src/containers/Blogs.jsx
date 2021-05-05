import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../context/AppContext';

const Blogs = () => {
    const {post} = useContext(AppContext);

    return (
        <main className="blogs-main">
            <section className="blogs-news-container">
                <div className="grid-container blogs-main-new">
                    <h3>Novedades</h3>
                    <div className="blogs-news-img-container">
                        <img src={post[0].image} alt={post[0].title}/>
                    </div>
                    <div className="blogs-news-info-container">
                        <h2>{post[0].title}</h2>
                        <p>{post[0].post.substring(0, 450)} ...</p>
                        <Link to={`blog/${post[0].id_post}`}>
                            <button className="blogs-button">Leer más</button>
                        </Link>                    
                    </div>
                </div>
            </section>
            <section className="blogs-posts-container">
                <div className="grid-container">
                    <h3>Últimos posts</h3>
                    {post.filter((a) => a.id_post > 1).map(item => (                 
                        <article key={item.title} className="post-container">                            
                            <img src={`http://placeimg.com/640/480/tech/${item.id_post}`} alt={item.title}/>
                            <p>{item.title}</p>
                            <p>{item.post.substring(0, 200)} ...</p>
                            <Link to={`blog/${item.id_post}`}>
                                <button className="blogs-button">Leer más</button>
                            </Link>
                        </article>
                        )
                    )}                                
                </div>
            </section>
        </main>
        );
    }
 
export default Blogs;