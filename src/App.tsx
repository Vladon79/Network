import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from 'redux';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/LoginPage';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import ProfileContainer from './Components/Profile/ProfileContainer';
import Setting from './Components/Setting/Setting';
import UsersContainer from './Components/Users/UsersContainer';
import { AppStoreType } from './redux/redux-store';
import { ActionType } from './types/types';

type AppType = {
  // store: AppStoreType
  //store: Store<any, ActionType>
  store: any
}

const App = (props: AppType) => {
  return (
    <BrowserRouter>
      <div>vjhj</div>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setting' render={() => <Setting />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

