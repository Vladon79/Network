import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Music from './Components/Music/Music';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Profile from './Components/Profile/Profile';
import Setting from './Components/Setting/Setting';
import { storeType } from './state/state'
type AppType = {
  store: storeType
}
const App = ({ store, ...props }: AppType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={store._state.friendsPage.friends} />

        <div className='app-wrapper-content'>

          <Route path='/profile' render={() =>
            <Profile
              post={store._state.postPage.postData}
              dispatch={store.dispatch.bind(store)}
              NewPostMessage={store._state.postPage.NewPostMessage}
            />}
          />
          <Route path='/dialogs' render={() =>
            <Dialogs
              dispatch={store.dispatch.bind(store)}
              newMessage={store._state.messagePage.newMessage}
              messages={store._state.messagePage.masseges}
              dialogs={store._state.messagePage.dialogs}
              />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/setting' render={() => <Setting />} />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;

