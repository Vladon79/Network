import React from 'react';
import {postType} from '../../../types/types';
import s from './MyPost.module.scss';
import {TextareaPropsType, TextareaReduxForm} from './MyPostTextareaForm';
import Post from './Post/Post';
import userPhoto from "../../../assents/image/user.png";
import {ProfileType} from "../Profile";

type MyPostType = {
    profile: ProfileType
    post: Array<postType>
    newPostChange: (text: string) => void
    addPost: (text: string) => void
}

const MyPost = React.memo((props: MyPostType) => {
    const postElements = props.post.map(p => <Post profile={props.profile} key={p.id} massage={p.message}
                                                   like={p.numberLike}/>)
    const onAddPost = ({newPost}: TextareaPropsType) => {
        props.addPost(newPost)
    }
    return (
        <div className={s.mypost}>
            <div className={s.mypostContainer}>
                <div>
                    <img className={s.ava}
                         src={props?.profile?.photos?.large || userPhoto}/>
                </div>
                <TextareaReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.myPosts}>
                <h3>My post</h3>
                {postElements}
            </div>
        </div>

    )
})

export default MyPost;

