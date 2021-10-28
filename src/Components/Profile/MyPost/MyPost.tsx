import React, { ChangeEvent } from 'react';
import { postType } from '../../../types/types';
import s from './MyPost.module.css';
import Post from './Post/Post';

type MyPostType = {
  post: Array<postType>
  NewPostMessage: string
  newPostChange: (text: string) => void
  addPost: (text: string) => void
}


const MyPost = (props: MyPostType) => {
  
  let postElements = props.post.map(p => <Post massage={p.message} like={p.numberLike} />)
  let newPostAdd = React.createRef<HTMLTextAreaElement>()

  let addPostOnClickHandler = () => {
    if (newPostAdd.current) {
      props.addPost(newPostAdd.current?.value)
    }
  }

  const onChangeHandlerNewPost = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (newPostAdd.current) {
      props.newPostChange(newPostAdd.current?.value)
    }
  }

  return (

    <div className={s.Mypost}>
      <h3>My post</h3>
      <div>
        <textarea ref={newPostAdd} value={props.NewPostMessage} onChange={onChangeHandlerNewPost}></textarea>
        <div>
          <button onClick={addPostOnClickHandler}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>

  )
}
export default MyPost;