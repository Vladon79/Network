import {authAPI, securityAPI, usersAPI} from "../api/api";
import {LoginFormPropsType} from "../Components/Login/LoginForm/LoginForm";
import {ActionType, DispatchType} from "../types/types";
import {stopSubmit} from "redux-form";

export type authDataType = {
    id: number | null
    email: string | null
    login: string
    isAuth: boolean
    captcha: string | null
}


const InitialState: authDataType = {
    id: null,
    email: null,
    login: '',
    isAuth: false,
    captcha: null
}

export const authReducer = (state: authDataType = InitialState, action: ActionType): authDataType => {

    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state,
                ...action.data,
            }
        }
        case 'GET-CAPTCHA-URL-SUCCESS': {
            return {...state, captcha:action.captchaUrl}
        }
        default:
            return state;

    }
}

export const setAuthUserData = (data: authDataType) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data

    } as const
}

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: 'GET-CAPTCHA-URL-SUCCESS',
        captchaUrl

    } as const
}


export const authMe = () => async (dispatch: DispatchType) => {
    const data = await authAPI.me()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData({isAuth: true, ...data.data}))
    }
}

export const loginMe = (formData: LoginFormPropsType) => async (dispatch: any) => {
    let response = await authAPI.login(formData)
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'someError'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: DispatchType) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}

export const logoutMe = () => async (dispatch: DispatchType) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: '', isAuth: false, captcha:null}))
    }
}