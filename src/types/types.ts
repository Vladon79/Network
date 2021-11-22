import { NewMessageChangeAC, SendMessageAC } from "../redux/dialogs-reduser";
import { AddUsersAC, RemoveUsersAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC } from "../redux/users-reduser";

import { AddPostAC, NewPostChangeAC } from "../redux/profile-reduser";

export type usersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type UsersType = {
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
    friendsPage: usersPageType
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
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    SetFriendsActionType;

export type SetTotalUsersCountActionType = ReturnType<typeof SetTotalUsersCountAC>;

export type SetCurrentPageActionType = ReturnType<typeof SetCurrentPageAC>;

export type SetFriendsActionType = ReturnType<typeof SetUsersAC>;

export type RemoveFriendsActionType = ReturnType<typeof RemoveUsersAC>;

export type AddFriendsActionType = ReturnType<typeof AddUsersAC>;

export type AddPostActionType = ReturnType<typeof AddPostAC>;

export type NewPosrChangeActionType = ReturnType<typeof NewPostChangeAC>;

export type SendMessageType = ReturnType<typeof SendMessageAC>;

export type newMessageChangeType = ReturnType<typeof NewMessageChangeAC>;
