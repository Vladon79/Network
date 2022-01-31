
import { authAPI, usersAPI } from "../api/api";
import { LoginFormPropsType } from "../Components/Login/LoginForm/LoginForm";
import { ActionType, DispatchType } from "../types/types";

export type authDataType = {
    id: number | null
    email: string | null
    login: string
    isAuth: boolean
}


const InitialState: authDataType = {
    id: null,
    email: null,
    login: '',
    isAuth: false
}

export const authReducer = (state: authDataType = InitialState, action: ActionType): authDataType => {

    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state,
                ...action.data,
            }
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


export const authMe = () => {
    return (dispatch: DispatchType) => {
        authAPI.me().then(data  => {
            if (data.resultCode === 0) {
              dispatch(setAuthUserData({isAuth: true, ...data.data}))
            }
          });
    }
}

export const loginMe = (formData: LoginFormPropsType) => {
    return (dispatch: any) => {
        console.log(formData)
        authAPI.login(formData)
            .then(response => {
            console.log(response.data)
            if (response.data.resultCode === 0) {
              dispatch(authMe())
            }
          });
    }
}

export const logoutMe = () => {
    return (dispatch: DispatchType) => {
        authAPI.logout()
            .then(data => {
            if (data.resultCode === 0) {
               dispatch(setAuthUserData({id: null, email: null, login: '', isAuth: false}))
            }
        });
    }
}