import { dialogsReduser } from './dialogs-reduser';
import { friendsReduserNav } from './friends-reduserNavbar';
import { profileReduser } from './profile-reduser';
import { combineReducers, createStore } from 'redux';
import { friendsReduser } from './friends-reduser';


const redusers = combineReducers({
    postPage: profileReduser,
    // friendsPage1: friendsReduserNav,
    messagePage: dialogsReduser,
    friendsPage:friendsReduser
})

export type AppStoreType = ReturnType<typeof redusers>

const reduxStore = createStore(redusers);


export default reduxStore