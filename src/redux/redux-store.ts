import { dialogsReduser } from './dialogs-reduser';
import { profileReducer } from './profile-reducer';
import { combineReducers, createStore } from 'redux';
import {  usersReducer } from './users-reducer';
import { authReduser } from './auth-reduser';


const redusers = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReduser
})

export type AppStoreType = ReturnType<typeof redusers>

const reduxStore = createStore(redusers);


export default reduxStore