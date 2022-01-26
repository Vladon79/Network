import React from 'react';
import { NavLink } from 'react-router-dom';
import { loginMe } from '../../redux/auth-reduser';
import Button from '../common/Button/Button';
import ReduxLoginForm, { LoginFormPropsType } from './LoginForm/LoginForm';
import s from './LoginPage.module.scss';



const LoginPage = () => {

  const onSubmit = (formData: LoginFormPropsType) => {
    console.log(formData)   
    loginMe (formData)
  }
  return (
    <div className={s.loginContainer}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}
export default LoginPage;