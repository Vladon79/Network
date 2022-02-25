import React from 'react';
import s from './Post.module.scss';
import userPhoto from "../../../../assents/image/user.png";

type Likes = {
    like: number
    massage: string
}

const Post = (props: Likes) => {
    return (
        <div className={s.post}>
            <div>
                <img src={userPhoto}/>
            </div>
            <div className={s.massage}>
                {props.massage}
                <div className={s.like}>
                    <span>♥</span>{props.like}
                </div>
            </div>
        </div>

    )
}

export default Post;