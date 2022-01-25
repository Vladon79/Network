import { profileAPI, usersAPI } from "../api/api";
import { ActionType, DispatchType, postType } from "../types/types"


export type postPageType = {
  postData: Array<postType>
  NewPostMessage: string
  profile: any
  status: string
}

const InitialState: postPageType = {
  NewPostMessage: '',
  postData: [
    { id: 1, message: 'Today I go to the cinema', numberLike: 12 },
    { id: 2, message: 'Haw are you?', numberLike: 20 },
    { id: 3, message: "It's my firs post!", numberLike: 100 }
  ],
  profile: null,
  status: ''
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
        NewPostMessage: ''
      }
    }

    case 'NEW-POST-CHANGE':
      return { ...state, NewPostMessage: action.NewPostText }

    case 'SET-USER-PROFILE':
      return { ...state, profile: action.profile }

    case 'SET-STATUS':
      return { ...state, status: action.status }

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

export const newPostChange = (NewPostText: string) => {
  return {
    type: 'NEW-POST-CHANGE',
    NewPostText: NewPostText
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

export const getUserProfile = (userID: string) => (dispatch: DispatchType) => {
  usersAPI.getProfile(userID).then(data => {
    dispatch(setUsersProfile(data))
  });
}

export const getStatus = (userID: string) => (dispatch: DispatchType) => {
  profileAPI.getStatus(userID).then(response => {
    dispatch(setStatus(response.data))
  });
}

export const updateStatus = (status: string) => (dispatch: DispatchType) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  });
}