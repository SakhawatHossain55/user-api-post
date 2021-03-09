import React from 'react';

const Comments = (props) => {
    const {name, body, emil} = props.comment;
    return (
        <div>
            <h1>{name}</h1>
            <p>{emil}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comments;