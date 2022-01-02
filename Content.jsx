import React from "react";
import s from './Content.module.css';
import AvatarDiscriptoin from "./AvaDiscription/AvatarDiscription";
import MyPost from "./MyPosts/MyPost";
import Post from "./Post/Post";


function Content() {


    return (

        <div className={s.content}>
            <div className={s.contentImg}>
                <img className={s.contentImg} src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"></img>
            </div>
            <div>
                <AvatarDiscriptoin />
                <div />
                <div>
                    <MyPost />
                    {/* <div className={s.posts}>
                        <Post />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Content;