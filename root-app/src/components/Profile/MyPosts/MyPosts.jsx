import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    return <div className={classes.post}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={classes.postItem}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;