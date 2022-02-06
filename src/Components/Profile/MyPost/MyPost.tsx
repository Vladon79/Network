import React from 'react';
import { postType } from '../../../types/types';
import s from './MyPost.module.scss';
import { TextareaPropsType, TextareaReduxForm } from './MyPostTextareaForm';
import Post from './Post/Post';

type MyPostType = {
  post: Array<postType>
  newPostChange: (text: string) => void
  addPost: (text: string) => void
}

const MyPost = (props: MyPostType) => {

  const postElements = props.post.map(p => <Post key={p.id} massage={p.message} like={p.numberLike} />)
  const onAddPost = ({ newPost }: TextareaPropsType) => {
    props.addPost(newPost)
  }

  return (
    <div className={s.mypost}>
      <div className={s.mypostContainer}>
        <div>
          <img className={s.ava} src='https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
        </div>
          <TextareaReduxForm onSubmit={onAddPost} />
      </div>
      <div className={s.myPosts}>
        <h3>My post</h3>
        {postElements}
      </div>
    </div >

  )
}
export default MyPost;

