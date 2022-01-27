import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { postType } from '../../../types/types';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import Button from '../../common/Button/Button';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPost.module.scss';
import Post from './Post/Post';

type MyPostType = {
  post: Array<postType>
  newPostChange: (text: string) => void
  addPost: (text: string) => void
}

type TextareaPropsType = {
  newPost: string
}


const MyPost = (props: MyPostType) => {

  let postElements = props.post.map(p => <Post key={p.id} massage={p.message} like={p.numberLike} />)

  const onAddPost = ({ newPost }: TextareaPropsType) => {
    props.addPost(newPost)
  }

  return (
    <div className={s.mypost}>
      <div className={s.mypostContainer}>
        <img className={s.ava} src='https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
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

const maxLength30 = maxLengthCreator(30)

const TextareaForm: React.FC<InjectedFormProps<TextareaPropsType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      {/* e.prevendDefault:сбор всех данных,упаковываются в обьект: контейнерная компонента вызывает onSubmit(formData) */}
      <div>
        <Field placeholder={'Add new post'} name={'newPost'} component={Textarea} validate={[required, maxLength30]} className={s.textarea} />
      </div>
      <div>
        <button>Login</button>
        {/* <Button title={'Login'} onClick={}/> */}
      </div>
    </form>
  )
}

const TextareaReduxForm = reduxForm<TextareaPropsType>({ form: 'profileNewPostForm' })(TextareaForm)
