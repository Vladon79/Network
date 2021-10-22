import { ActionType, postPageType, postType} from "./state";

export const profileReduser = (state: postPageType, action: ActionType) => {
    if (action.type === 'ADD-POST') {
        const newPostAddData: postType = {
            id: 5,
            message: action.newPostAdd,
            numberLike: 0

        }
        state.postData.push(newPostAddData)
        state.NewPostMessage = ''

    }
    else if (action.type === 'NEW-POST-CHANGE') {
        state.NewPostMessage = action.NewPostText;

    }

    return state;

}

export const AddPostAC = (newPostAdd: string) => {
    return {
      type: 'ADD-POST',
      newPostAdd: newPostAdd
    } as const
  }
  
  export const NewPostChangeAC = (NewPostText: string) => {
    return {
      type: 'NEW-POST-CHANGE',
      NewPostText: NewPostText
    } as const
  }