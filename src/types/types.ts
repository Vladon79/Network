import { NewMessageChangeAC, SendMessageAC } from "../redux/dialogs-reduser";
import { addUsers, removeUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from "../redux/users-reduser";

import { AddPostAC, NewPostChangeAC, setUsersProfile } from "../redux/profile-reduser";

export type usersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    profile:any
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
    NewPostChangeActionType |
    setUsersProfileActionType |
    SendMessageType |
    newMessageChangeType |
    AddFriendsActionType |
    RemoveFriendsActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    SetFriendsActionType |
    ToggleIsFetchingActionType;

export type setUsersProfileActionType = ReturnType<typeof setUsersProfile>;

export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;

export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;

export type SetFriendsActionType = ReturnType<typeof setUsers>;

export type RemoveFriendsActionType = ReturnType<typeof removeUsers>;

export type AddFriendsActionType = ReturnType<typeof addUsers>;

export type AddPostActionType = ReturnType<typeof AddPostAC>;

export type NewPostChangeActionType = ReturnType<typeof NewPostChangeAC>;

export type SendMessageType = ReturnType<typeof SendMessageAC>;

export type newMessageChangeType = ReturnType<typeof NewMessageChangeAC>;
