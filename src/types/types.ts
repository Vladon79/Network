import { SendMessageAC } from "../redux/dialogs-reduser";
import { followSuccess, unFollowSuccess, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowingProgess, usersPageType } from "../redux/users-reducer";
import { addPost,  postPageType, setStatus, setUsersProfile } from "../redux/profile-reducer";
import { setAuthUserData } from "../redux/auth-reduser";
import { Dispatch } from "react";



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

export type DispatchType = Dispatch< ActionType >

export type ActionType = AddPostActionType |
    setUsersProfileActionType |
    SendMessageType |
    AddFriendsActionType |
    RemoveFriendsActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    SetFriendsActionType |
    ToggleIsFetchingActionType |
    toggleIsFollowingProgessActionType |
    setStatusActionType |
    setUserDataActionType;




export type toggleIsFollowingProgessActionType = ReturnType<typeof toggleIsFollowingProgess>

export type setUserDataActionType = ReturnType<typeof setAuthUserData>

export type setUsersProfileActionType = ReturnType<typeof setUsersProfile>;

export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;

export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;

export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;

export type SetFriendsActionType = ReturnType<typeof setUsers>;

export type RemoveFriendsActionType = ReturnType<typeof unFollowSuccess>;

export type AddFriendsActionType = ReturnType<typeof followSuccess>;

export type AddPostActionType = ReturnType<typeof addPost>;

export type SendMessageType = ReturnType<typeof SendMessageAC>;

export type setStatusActionType = ReturnType<typeof setStatus>;