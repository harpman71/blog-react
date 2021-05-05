import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Blogs from '../containers/Blogs';
import Blog from '../containers/Blog';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useBlogsposts from '../hooks/useBlogposts';
import Loading from '../components/Loading';


const App = () => {

    const url = process.env.API;

    const blogposts = useBlogsposts(url);

    const isEmpty = Object.keys(blogposts).length;
    
    return (
            <>
            {isEmpty>0 ?(               
                <AppContext.Provider value={blogposts}>
                    <BrowserRouter>
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/blogs" component={Blogs}/>
                                <Route exact path="/blog/:id" component={Blog}/>
                                <Route exact path="/profile" component={Profile}/>            
                                <Route component={NotFound}/>
                            </Switch>
                        </Layout>            
                    </BrowserRouter>
                </AppContext.Provider>
            ) : <Loading/>}
            </>
        ) ;
            
}

export default App;