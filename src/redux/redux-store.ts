import {dialogsReduser} from './dialogs-reduser';
import {profileReducer} from './profile-reducer';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reduser';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './app-reducer';

const reducers = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReduser,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.__store__ = reduxStore
// const reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default reduxStore