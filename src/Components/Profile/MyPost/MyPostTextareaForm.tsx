import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from './MyPost.module.scss';

export type TextareaPropsType = {
    newPost: string
  }
  
  const maxLength30 = maxLengthCreator(30)
  
  const MyPostTextareaForm: React.FC<InjectedFormProps<TextareaPropsType>> = (props) => {
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
  
  export const TextareaReduxForm = reduxForm<TextareaPropsType>({ form: 'profileNewPostForm' })(MyPostTextareaForm)
  