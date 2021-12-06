import { usersPageType } from './../types/types';
import { ActionType, UsersType } from "../types/types";


type InitialStateTipe = usersPageType

const InitialState: InitialStateTipe = {
    users: [
        // { id: 1, friends: false, status: 'ONE', location: { country: 'Belarus', city: 'Brest' }, name: 'Pavel', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        // { id: 2, friends: true, status: 'TO', location: { country: 'Belarus', city: 'Brest' }, name: 'Artyr', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        // { id: 3, friends: true, status: 'END', location: { country: 'Belarus', city: 'Brest' }, name: 'Dima', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },

    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

export const usersReduser = (state: usersPageType = InitialState, action: ActionType):usersPageType => {

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