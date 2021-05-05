import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/styles.scss';

const Layout = ({children}) => {
    return( 
        <div>
            <Header/>
            {children}      
            <Footer/>            
        </div>
        );
    }
 
export default Layout;