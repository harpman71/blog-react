import React from 'react';
import imageLoading from '../assets/img/loading.gif';

const Loading = () =>{
    return(
        <div align="center" className="mt-5">
            <img src={imageLoading} alt={imageLoading} className="img-fluid"/>
        </div>
        )
    }

export default Loading;
