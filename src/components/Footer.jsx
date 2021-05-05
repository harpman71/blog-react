import React from 'react';

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    
    return(
        <footer>
            <p>{`© Blog ${year}`}</p>
        </footer>
        )
    }
 
export default Footer;