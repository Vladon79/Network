import React from 'react';
import s from './Post.module.css';

type Likes = {
    like: number
    massage: string
}


const Post = (props: Likes) => {
    return (

        <div className={s.item}>
            <div>
                <img src='https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
            </div>
            <div className={s.massageLike}>
                {props.massage}
                <div className={s.like_color}>
                    <span>♥</span>{props.like}
                </div>
            </div>

        </div>

    )
}

export default Post;