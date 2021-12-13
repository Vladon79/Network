import { usersPageType } from './../types/types';
import { ActionType, UsersType } from "../types/types";


type InitialStateTipe = usersPageType

const InitialState: InitialStateTipe = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReduser = (state: usersPageType = InitialState, action: ActionType): usersPageType => {

    switch (action.type) {
        case 'FOLLOW-USERS': {
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
        case 'UNFOLLOW-USERS': {
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
                users: action.users
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
                    ? [...state.followingInProgress, action.useiID]
                    : state.followingInProgress.filter(id => id !== action.useiID)
            }
        }

        default:
            return state;

    }
}

export const followUsers = (usersID: number) => {
    return {
        type: 'FOLLOW-USERS',
        usersID

    } as const
}
export const unfollowUsers = (usersID: number) => {
    return {
        type: 'UNFOLLOW-USERS',
        usersID
    } as const
}

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        users
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

export const toggleIsFollowingProgess = (isFetching: boolean, useiID: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching, useiID
    } as const
}