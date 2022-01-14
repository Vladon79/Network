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

  let postElements = props.post.map(p => <Post key={p.id} massage={p.message} like={p.numberLike} />)
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

      <div className={s.Textarea}>

        <img className={s.ava} src='https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
        <div>
          <textarea
            className={s.textarea}
            ref={newPostAdd}
            value={props.NewPostMessage}
            onChange={onChangeHandlerNewPost}/>
          <div>
            <button onClick={addPostOnClickHandler}>Add post</button>
          </div>
        </div>

      </div>
      <div className={s.MyPostName}>
        

      
      <h3>My post</h3>
      {postElements}
      </div>
    </div >

  )
}
export default MyPost;