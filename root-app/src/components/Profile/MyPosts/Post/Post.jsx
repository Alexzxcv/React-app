import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
        <img src="https://i.pinimg.com/736x/9a/0d/eb/9a0debd592a5b15b9b979d53bfb0e019.jpg" alt={'asd'}/>
        {props.message}
        <div className={classes.likeWrapper}>
            <span className={classes.likes}>{props.likesCount}</span>
            <span className={classes.buttonLikes}>Like</span>
        </div>
    </div>
}

export default Post;
