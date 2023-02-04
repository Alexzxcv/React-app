import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);
    let newPostElement = React.createRef();

    const addPost = () => {
        props.addPostActionCreator();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextActionCreator(text);
    }

    return <div className={classes.post}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}> Add post</button>
            </div>
        </div>
        <div className={classes.postItem}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;
