import React from 'react';
import {loginMe} from '../../redux/auth-reduser';
import ReduxLoginForm, {LoginFormPropsType} from './LoginForm/LoginForm';
import s from './LoginPage.module.scss';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../redux/redux-store";

type LoginPagePropsType = {
    loginMe: (formData: LoginFormPropsType) => void
    isAuth: boolean
    captchaUrl: string | null
}

const LoginPage = ({loginMe, isAuth, captchaUrl}: LoginPagePropsType) => {

    const onSubmit = (formData: LoginFormPropsType) => {
        loginMe(formData)
    }
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={s.loginContainer}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state: AppStoreType) => ({
    captchaUrl: state.auth.captcha,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginMe})(LoginPage);