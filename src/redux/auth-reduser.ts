
import { authAPI, usersAPI } from "../api/api";
import { ActionType, DispatchType } from "../types/types";

export type authDataType = {
    id: number 
    email: string 
    login: string 
    isAuth: boolean
}

type InitialStateTipe = authDataType

const InitialState: InitialStateTipe = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}

export const authReduser = (state: authDataType = InitialState, action: ActionType): authDataType => {

    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth:true
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
        authAPI.me().then(data => {
            if (data.resultCode === 0) {
              dispatch(setAuthUserData(data.data))
            }
          });
    }
}