import { useEffect, useState } from 'react';
import axios from 'axios';

const useBlogposts = url => {

    const [blogposts, setBlogposts] = useState([]);   

    useEffect( async() => {
        const response = await axios(url);
        setBlogposts(response.data);
    },[]);
        
    return blogposts;
};

 
export default useBlogposts;
