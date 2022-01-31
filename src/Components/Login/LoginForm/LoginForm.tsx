import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import Button from '../../common/Button/Button';
import { Input } from '../../common/FormsControls/FormsControls';
import s from './LoginForm.module.scss';
import {logoutMe} from "../../../redux/auth-reduser";


export type LoginFormPropsType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<LoginFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            {/* e.prevendDefault:сбор всех данных,упаковываются в обьект: контейнерная компонента вызывает onSubmit(formData) */}
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[required, maxLength30]} className={s.input} />
            </div>
            <div>
                <Field placeholder={'password'} type={'password'} name={'password'} component={Input} validate={[required, maxLength30]} className={s.input} />
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'rememberMe'} className={s.checkbox} /> remember me
            </div>
            <div>
                <button>Login</button>
                {/* <Button title={'Login'} onClick={}/> */}
            </div>
        </form>
    )
}



const ReduxLoginForm = reduxForm<LoginFormPropsType>({ form: 'login' })(LoginForm)
export default ReduxLoginForm;