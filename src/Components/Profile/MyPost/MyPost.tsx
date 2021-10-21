import React, { ChangeEvent } from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import { ActionType, postType } from './../../../state/state'

type MyPostType = {
  post: Array<postType>
  dispatch: (action: ActionType) => void
  NewPostMessage: string
}


const MyPost = ({ dispatch, post, ...props }: MyPostType) => {


  let postElements = post.map(p => <Post massage={p.message} like={p.numberLike} />)

  let newPostAdd = React.createRef<HTMLTextAreaElement>()

  let addPostOnClickHandler = () => {
    if (newPostAdd.current) {
      // addPostCallBack(newPostAdd.current?.value)
      dispatch({ type: 'ADD-POST', newPostAdd: newPostAdd.current?.value })
    }
  }

  const onChangeHandlerNewPost = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (newPostAdd.current) {
      let text = newPostAdd.current?.value
      // newPostChangeCallBack(text)
      dispatch({ type: 'NEW-POST-CHANGE', NewPostText: text })
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