import { usersAPI } from "../api/api";

export type ActionType =
    toggleIsFollowingProgessActionType |
    ToggleIsFetchingActionType |
    SetTotalUsersCountActionType |
    SetCurrentPageActionType |
    SetFriendsActionType |
    UnFollowUserActionType |
    FollowUserActionType
export type toggleIsFollowingProgessActionType = ReturnType<typeof toggleIsFollowingProgess>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>;
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>;
export type SetFriendsActionType = ReturnType<typeof setUsers>;
export type UnFollowUserActionType = ReturnType<typeof unFollowSuccess>;
export type FollowUserActionType = ReturnType<typeof followSuccess>;

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
const InitialState: usersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: usersPageType = InitialState, action: ActionType): usersPageType => {

    switch (action.type) {
        case 'FOLLOW-USER': {
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.usersID) {
                        return { ...f, followed: true }
                    }
                    return f
                })
            }
        }
        case 'UNFOLLOW-USER': {
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.usersID) {
                        return { ...f, followed: false }
                    }
                    return f
                })
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: action.user
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case 'TOGGLE-IS-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (usersID: number) => {
    return {
        type: 'FOLLOW-USER',
        usersID

    } as const
}
export const unFollowSuccess = (usersID: number) => {
    return {
        type: 'UNFOLLOW-USER',
        usersID
    } as const
}

export const setUsers = (user: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        user
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

export const toggleIsFollowingProgess = (isFetching: boolean, userID: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching, userID
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(200))
        });
    }
}

export const follow = (id: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgess(true, id))
        usersAPI.followToUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleIsFollowingProgess(false, id))
        });
    }
}

export const unFollow = (id: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgess(true, id))
        usersAPI.unFollowToUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(id))
            }
            dispatch(toggleIsFollowingProgess(false, id))
        });
    }
}