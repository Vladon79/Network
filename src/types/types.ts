import { NewMessageChangeAC, SendMessageAC } from "../redux/dialogs-reduser";
import { followUsers, unfollowUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowingProgess } from "../redux/users-reduser";

import { AddPostAC, NewPostChangeAC, setUsersProfile } from "../redux/profile-reduser";
import { setAuthUserData } from "../redux/auth-reduser";

export type usersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}
export type UsersType = {
    id: number
    followed: boolean
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
    profile: any
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
    ToggleIsFetchingActionType |
    toggleIsFollowingProgessActionType |
    setUserDataActionType;




export type toggleIsFollowingProgessActionType = ReturnType<typeof toggleIsFollowingProgess>

export type setUserDataActionType = ReturnType<typeof setAuthUserData>

export type setUsersProfileActionType = ReturnType<typeof setUsersProfile>;

export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;

export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;

export type SetFriendsActionType = ReturnType<typeof setUsers>;

export type RemoveFriendsActionType = ReturnType<typeof unfollowUsers>;

export type AddFriendsActionType = ReturnType<typeof followUsers>;

export type AddPostActionType = ReturnType<typeof AddPostAC>;

export type NewPostChangeActionType = ReturnType<typeof NewPostChangeAC>;

export type SendMessageType = ReturnType<typeof SendMessageAC>;

export type newMessageChangeType = ReturnType<typeof NewMessageChangeAC>;
