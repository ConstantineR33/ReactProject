import React from "react";
import s from './Content.module.css';

function Content() {


    return (

        <div className={s.content}>
            <div className={s.contentImg}>
                <img className={s.contentImg} src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"></img>
            </div>
            <div className={s.avaDisctiption}>
                <img className={s.avaDisctiption} src="https://static.vecteezy.com/system/resources/previews/001/191/847/non_2x/circle-png.png"></img>
                <div className={s.disctiption}>
                    <h2>Constantine Roter</h2>
                    <n />
                    <h2>Age: 33</h2>
                </div>
            </div>
            <div>
                my posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remove Post</button>

                    new post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        <img src="data:image/jpeg;base64,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" ></img>
                        post1
                        <div>
                            <span>Like</span>
                            <n />
                            <span>Dislike</span>
                        </div>
                    </div>

                    <div className={s.item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBDp_8rQKWkeeuh9jFHr2Du2UcbP64-TOPQ&usqp=CAU"></img>
                        post2
                        <div>
                            <span>Like</span>
                            <n />
                            <span>Dislike</span>
                        </div>
                    </div>

                    <div className={s.item}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR08RwsF6NzO95FURxuwuUCIJ8JAzdLYUf-zQ&usqp=CAU" ></img>
                        post3
                        <div>
                            <span>Like</span>
                            <n />
                            <span>Dislike</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;