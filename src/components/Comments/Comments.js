import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Comments = () => {
    const { idd } = useParams();
    const [comment, setComment] = useState([]);
    // console.log(idd, comment);
    // const {name, email} = comment;
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idd}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, []);

    const commentStyle = {
        border:'1px solid blue',
        margin:'5px',
        padding:'5px'
    }
    return (
        <div>
            {comment.map(cmt => <div style={commentStyle}> <p>Commented by {cmt.name}</p>
            <h6>Email:{cmt.email} </h6> </div>)}
            
        </div>
    );
};

export default Comments;