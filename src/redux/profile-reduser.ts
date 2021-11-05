import { ActionType, postPageType, postType } from "../types/types"


type InitialStateType = postPageType

const InitialState: InitialStateType = {
  NewPostMessage: '',
  postData: [
    { id: 1, message: 'Today I go to the cinema', numberLike: 12 },
    { id: 2, message: 'Haw are you?', numberLike: 20 },
    { id: 3, message: "It's my firs post!", numberLike: 100 }
  ],
}

export const profileReduser = (state: postPageType = InitialState, action: ActionType) => {
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
      
    default:
      return state;
  }
}

export const AddPostAC = (newPostAdd: string) => {
  return {
    type: 'ADD-POST',
    newPostAdd: newPostAdd
  } as const
}

export const NewPostChangeAC = (NewPostText: string) => {
  console.log(NewPostText)
  return {
    type: 'NEW-POST-CHANGE',
    NewPostText: NewPostText
  } as const
}