import React, { useEffect, useState } from 'react';
import NewsFeed from '../NewsFeed/NewsFeed';


const Home = () => {
    const [posts, setPost] =  useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[]);
    return (
        <div>
            {
                posts.map(ps => <NewsFeed posts={ps} key={ps.id}></NewsFeed>)
            }
        </div>
    );
};

export default Home;