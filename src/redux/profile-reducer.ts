import { usersAPI } from "../api/api";
import { ActionType, DispatchType, postType } from "../types/types"


export type postPageType = {
  postData: Array<postType>
  NewPostMessage: string
  profile: any
}

const InitialState: postPageType = {
  NewPostMessage: '',
  postData: [
    { id: 1, message: 'Today I go to the cinema', numberLike: 12 },
    { id: 2, message: 'Haw are you?', numberLike: 20 },
    { id: 3, message: "It's my firs post!", numberLike: 100 }
  ],
  profile:null
}

export const profileReducer = (state: postPageType = InitialState, action: ActionType) => {
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

export const onUserProfile = (userID:string) => {
  return (dispatch: DispatchType) => {
    usersAPI.onUserProfile(userID).then(data => {
      dispatch(setUsersProfile(data))
    });
  }
}