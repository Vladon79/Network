import {profileAPI, usersAPI} from "../api/api";
import {ActionType, DispatchType, postType} from "../types/types"
import profile, {ProfileType} from "../Components/Profile/Profile";
import {stopSubmit} from "redux-form";


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
        case 'SAVE-PHOTO':
            return {...state, profile: {...state.profile, photos: action.photo}}

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

export const savePhotoSuccess = (photo: any) => {
    return {
        type: 'SAVE-PHOTO',
        photo
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
export const savePhoto = (photo: any) => async (dispatch: DispatchType) => {
    const response = await profileAPI.savePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState:any) => {
    const userID = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userID))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'someError'
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(message)
    }
}

