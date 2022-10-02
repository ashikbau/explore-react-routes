import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body,userId}= post;
    const navigate =useNavigate();
    const handleClick =()=>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>Details About Post:{id}</h2>
            <h5>Title:{title}</h5>
            <p>Body:{body}</p>
            <button onClick={handleClick}>Get The Author</button>
        </div>
    );
};

export default PostDetails;