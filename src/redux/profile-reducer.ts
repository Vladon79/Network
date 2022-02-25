import {profileAPI, usersAPI} from "../api/api";
import {ActionType, DispatchType, postType} from "../types/types"


export type postPageType = {
    postData: Array<postType>
    profile: any
    status: string
}

const InitialState: postPageType = {
    postData: [
        {id: 1, message: 'Today I go to the cinema', numberLike: 12},
        {id: 2, message: 'Haw are you?', numberLike: 20},
        {id: 3, message: "It's my firs post!", numberLike: 100}
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state: postPageType = InitialState, action: ActionType): postPageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPostAddData: postType = {
                id: 5,
                message: action.newPostAdd,
                numberLike: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPostAddData],

            }
        }
        case "DELETE-POST":
            return {
                ...state,
                postData: [...state.postData.filter(p => p.id !== action.id && p)]
            }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}

        case 'SET-STATUS':
            return {...state, status: action.status}

        default:
            return state;
    }
}

export const addPost = (newPostAdd: string) => {
    return {
        type: 'ADD-POST',
        newPostAdd: newPostAdd
    } as const
}

export const deletePost = (id: number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}

export const setUsersProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}


export const getUserProfile = (userID: string) => async (dispatch: DispatchType) => {
    const data = await usersAPI.getProfile(userID)
    dispatch(setUsersProfile(data))
}

export const getStatus = (userID: string) => async (dispatch: DispatchType) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status: string) => async (dispatch: DispatchType) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

