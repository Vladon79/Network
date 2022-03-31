import {usersAPI} from "../api/api";
import {DispatchType} from "../types/types";
import {updateObjectInArray} from "../utils/helper/objects-helpers";

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
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type UserType = {
    followed: boolean
    id: number
    name: string
    photos: {
        large: string
        small: string
    }
    status: null | string
    uniqueUrlName: null | string
}
const InitialState: usersPageType = {
    users: [],
    pageSize: 30,
    totalUsersCount: 200,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: usersPageType = InitialState, action: ActionType): usersPageType => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            return {
                ...state,
                users: updateObjectInArray<UserType>(state.users, action.usersID, 'id', {followed: true})
            }
        }
        case 'UNFOLLOW-USER': {
            return {
                ...state,
                users: updateObjectInArray<UserType>(state.users, action.usersID, 'id', {followed: false})
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

export const setUsers = (user: Array<UserType>) => {
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

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: DispatchType) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: DispatchType, id: number, apiMethod: any, actionCreate: any) => {
    dispatch(toggleIsFollowingProgess(true, id))
    const data = await apiMethod(id)
    if (data.resultCode === 0) {
        dispatch(actionCreate(id))
    }
    dispatch(toggleIsFollowingProgess(false, id))
}

export const follow = (id: number) => async (dispatch: DispatchType) => {
    const apiMethod = usersAPI.followToUser.bind(id)
    const actionCreate = followSuccess
    followUnfollowFlow(dispatch, id, apiMethod, actionCreate)
}

export const unFollow = (id: number) => async (dispatch: DispatchType) => {
    const apiMethod = usersAPI.unFollowToUser.bind(id)
    const actionCreate = unFollowSuccess
    followUnfollowFlow(dispatch, id, apiMethod, actionCreate)
}
