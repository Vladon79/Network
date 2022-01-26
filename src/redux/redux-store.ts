import { dialogsReduser } from './dialogs-reduser';
import { profileReducer } from './profile-reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {  usersReducer } from './users-reducer';
import { authReduser } from './auth-reduser';
import  thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


const redusers = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReduser,
    form: formReducer
})

export type AppStoreType = ReturnType<typeof redusers>

const reduxStore = createStore(redusers, applyMiddleware(thunkMiddleware));


export default reduxStore