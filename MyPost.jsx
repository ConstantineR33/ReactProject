import React from "react";
import Post from "../Post/Post";
import s from './MyPost.module.css';

function MyPost() {

    return (
        <div>
        <div>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Remove Post</button> 
        </div>
        <div className={s.posts}>
           <Post message="hi, how are you" likeCounts="2" dislikeCounts="0"/>
           <Post message="hi, its my first post" likeCounts="23" dislikeCounts="0"/>
            </div>
            </div>

    )
}

export default MyPost;