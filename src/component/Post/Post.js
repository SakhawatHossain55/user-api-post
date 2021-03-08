import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post;
    return (
        <div>
            <h3><strong>Id : {id} {title}</strong></h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;