import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';


const Post = () => {
    const {idd} = useParams();
    const [post, setPost] = useState([]);
    const { title, id, body } = post;
    console.log(idd, id);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idd}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);

    return (
        <div style={{margin:'10px',padding:'10px',}}>
        
            <h2>{title}</h2>
            <h6>Posted by: User{idd}</h6>
            <p>{body}</p>

            <Comments></Comments>
        </div>
    );
};

export default Post;