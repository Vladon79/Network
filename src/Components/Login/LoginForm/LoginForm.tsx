import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validator';
import {Input} from '../../common/FormsControls/FormsControls';
import s from './LoginForm.module.scss';
import style from '../../common/FormsControls/FormsControls.module.scss'


export type LoginFormPropsType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<LoginFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[required, maxLength30]}
                       className={s.input}/>
            </div>
            <div>
                <Field placeholder={'password'} type={'password'} name={'password'} component={Input}
                       validate={[required, maxLength30]} className={s.input}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'} className={s.checkbox}/> remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const ReduxLoginForm = reduxForm<LoginFormPropsType>({form: 'login'})(LoginForm)
export default ReduxLoginForm;