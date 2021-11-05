import { NewMessageChangeAC, SendMessageAC } from "../redux/dialogs-reduser";
import { AddFriendsAC, RemoveFriendsAC, SetFriendsAC } from "../redux/friends-reduser";

import { AddPostAC, NewPostChangeAC } from "../redux/profile-reduser";

export type friendsPageType = {
    friends: Array<FriendsType>
}
export type FriendsType = {
    id: number
    friends: boolean
    status?: string
    location?: {
        city: string
        country: string
    }
    name: string
    ava: string
}

export type messagesType = {
    id: number
    message: string
    myMessage: boolean
}
export type dialogsType = {
    id: number
    name: string
    ava: string
}
export type postType = {
    id: number
    message: string
    numberLike: number
}
export type messagesPageType = {
    masseges: Array<messagesType>
    dialogs: Array<dialogsType>
    newMessage: string

}
export type postPageType = {
    postData: Array<postType>
    NewPostMessage: string
}

export type stateType = {
    messagePage: messagesPageType
    postPage: postPageType
    friendsPage: friendsPageType
}

export type storeType = {
    _state: stateType
    getState: () => stateType
    _callSubscriber: (state: stateType) => void
    sendMessageCallBack: (sendMessage: string) => void
    newMessageChangeCallBack: (newMessageText: string) => void
    newPostChangeCallBack: (NewPostText: string) => void
    addPostCallBack: (newPostAdd: string) => void
    subscribe: (callback: (state: stateType) => void) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType |
    NewPosrChangeActionType |
    SendMessageType |
    newMessageChangeType |
    AddFriendsActionType |
    RemoveFriendsActionType |
    SetFriendsActionType;

export type SetFriendsActionType = ReturnType<typeof SetFriendsAC>;

export type RemoveFriendsActionType = ReturnType<typeof RemoveFriendsAC>;

export type AddFriendsActionType = ReturnType<typeof AddFriendsAC>;

export type AddPostActionType = ReturnType<typeof AddPostAC>;

export type NewPosrChangeActionType = ReturnType<typeof NewPostChangeAC>;

export type SendMessageType = ReturnType<typeof SendMessageAC>;

export type newMessageChangeType = ReturnType<typeof NewMessageChangeAC>;
