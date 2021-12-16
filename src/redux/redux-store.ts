import { dialogsReduser } from './dialogs-reduser';
import { profileReduser } from './profile-reduser';
import { combineReducers, createStore } from 'redux';
import {  usersReducer } from './users-reducer';
import { authReduser } from './auth-reduser';


const redusers = combineReducers({
    postPage: profileReduser,
    messagePage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReduser
})

export type AppStoreType = ReturnType<typeof redusers>

const reduxStore = createStore(redusers);


export default reduxStore