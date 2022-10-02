import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div>
            <h1>Friends details:{friend.name}</h1>
            <p>Contact no:{friend.phone}</p>
            <h2>Everything you need to about this person</h2>
        </div>
    );
};

export default FriendDetails;