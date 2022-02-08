import { dialogsReduser } from './dialogs-reduser';
import { profileReducer } from './profile-reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {  usersReducer } from './users-reducer';
import { authReducer } from './auth-reduser';
import  thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStoreType = ReturnType<typeof reducers>

const reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));


export default reduxStore