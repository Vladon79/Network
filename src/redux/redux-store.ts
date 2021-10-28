import { dialogsReduser } from './dialogs-reduser';
import { friendsReduser } from './friends-reduser';
import { profileReduser } from './profile-reduser';
import { combineReducers, createStore } from 'redux';


const redusers = combineReducers({
    postPage: profileReduser,
    friendsPage: friendsReduser,
    messagePage: dialogsReduser
})

export type AppStoreType = ReturnType<typeof redusers>

const reduxStore = createStore(redusers);


export default reduxStore