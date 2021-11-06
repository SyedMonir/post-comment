import React from 'react';
import { Link } from 'react-router-dom';

const NewsFeed = (props) => {
    const { title, body ,id} = props.posts;
    // console.log(id);
    return (
        <div style={{border:'1px solid blue', margin:'10px',padding:'10px',}}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
                <button>Show more</button>
            </Link>

        </div>
    );
};

export default NewsFeed;