import { dialogsReduser } from './dialogs-reduser';
import { profileReduser } from './profile-reduser';
import { combineReducers, createStore } from 'redux';
import {  usersReduser } from './users-reduser';


const redusers = combineReducers({
    postPage: profileReduser,
    messagePage: dialogsReduser,
    usersPage: usersReduser
})

export type AppStoreType = ReturnType<typeof redusers>

const reduxStore = createStore(redusers);


export default reduxStore