import { ActionType, friendsPageType } from "../types/types";


type InitialStateTipe = friendsPageType

const InitialState: InitialStateTipe = {
    friends: [
        { id: 1, friends: false, status: 'Super', location: { country: 'Belarus', city: 'Brest' }, name: 'Pavel', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 2, friends: true, status: 'Friends', location: { country: 'Belarus', city: 'Brest' }, name: 'Artyr', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 3, friends: true, status: 'Bos', location: { country: 'Belarus', city: 'Brest' }, name: 'Dima', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
    ]
}

export const friendsReduserNav = (state: friendsPageType = InitialState, action: ActionType) => {


    return state;

}