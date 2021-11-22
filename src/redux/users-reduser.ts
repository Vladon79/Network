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
    currentPage: 1
}

export const usersReduser = (state: usersPageType = InitialState, action: ActionType) => {

    switch (action.type) {
        case 'ADD-USERS': {
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.usersID) {
                        return { ...f, friends: true }
                    }
                    return f
                })
            }

        }
        case 'REMOVE-USERS': {
            return {
                ...state,
                users: state.users.map(f => {
                    if (f.id === action.usersID) {
                        return { ...f, friends: false }
                    }
                    return f
                })
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users:  action.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage:action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount:action.totalUsersCount
            }
        }

        default:
            return state;

    }
}

export const AddUsersAC = (usersID: number) => {
    return {
        type: 'ADD-USERS',
        usersID

    } as const
}
export const RemoveUsersAC = (usersID: number) => {
    return {
        type: 'REMOVE-USERS',
        usersID
    } as const
}

export const SetUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export const SetCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}

export const SetTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}