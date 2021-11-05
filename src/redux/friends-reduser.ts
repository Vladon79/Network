
import { ActionType, friendsPageType, FriendsType } from "../types/types";


type InitialStateTipe = friendsPageType

const InitialState: InitialStateTipe = {
    friends: [
        { id: 1, friends: false, status: 'ONE', location: { country: 'Belarus', city: 'Brest' }, name: 'Pavel', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 2, friends: true, status: 'TO', location: { country: 'Belarus', city: 'Brest' }, name: 'Artyr', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 3, friends: true, status: 'END', location: { country: 'Belarus', city: 'Brest' }, name: 'Dima', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
    ]

}

export const friendsReduser = (state: friendsPageType = InitialState, action: ActionType) => {

    switch (action.type) {
        case 'ADD-FRIENDS': {
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.friendsID) {
                        return { ...f, friends: true }
                    }
                    return f
                })
            }

        }
        case 'REMOVE-FRIENDS': {
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id === action.friendsID) {
                        return { ...f, friends: false }
                    }
                    return f
                })
            }
        }
        case 'SET-FRIENDS': {
            return {
                ...state,
                friends: [...state.friends, ...action.friends]
            }
        }

        default:
            return state;

    }
}

export const AddFriendsAC = (friendsID: number) => {
    return {
        type: 'ADD-FRIENDS',
        friendsID

    } as const
}
export const RemoveFriendsAC = (friendsID: number) => {
    return {
        type: 'REMOVE-FRIENDS',
        friendsID
    } as const
}

export const SetFriendsAC = (friends: Array<FriendsType>) => {
    return {
        type: 'SET-FRIENDS',
        friends
    } as const
}

