import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from 'redux';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import FriendsContainer from './Components/Friends/FriendsContainer';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import ProfileContainer from './Components/Profile/ProfileContainer';
import RightNavbar from './Components/RightNavbar/RightNavbar';
import Setting from './Components/Setting/Setting';
import { ActionType } from './types/types';

type AppType = {
  store: Store<any, ActionType>
}

const App = (props: AppType) => {

  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <RightNavbar/>

        <div className='app-wrapper-content'>

          <Route path='/profile' render={() =>
            <ProfileContainer
            // store={props.store}
            />}
          />
          <Route path='/dialogs' render={() =>
            <DialogsContainer
            // store={props.store}
            />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setting' render={() => <Setting />} />
          <Route path='/friends' render={() => <FriendsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;

