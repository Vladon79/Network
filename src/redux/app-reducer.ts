import {ActionType} from "../types/types";
import {authMe} from "./auth-reduser";

export type appDataType = {
    initializet: boolean
}


const InitialState: appDataType = {
    initializet: false,
}

export const appReducer = (state: appDataType = InitialState, action: ActionType): appDataType => {

    switch (action.type) {
        case 'INITIALIZET-SUCCESS': {
            return {
                ...state,
                initializet: true

            }
        }
        default:
            return state;

    }
}

export const initializetSuccess = () => {
    return {
        type: 'INITIALIZET-SUCCESS',
    } as const
}


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMe())
    Promise.all([promise]).then(() => dispatch(initializetSuccess()))
}