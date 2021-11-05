import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reduxStore from './redux/redux-store';





  ReactDOM.render(
    <React.StrictMode>
      <Provider store={reduxStore}>
        <App store={reduxStore}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


// let state = useSelector<AppStoreType, Array<stateType>>(s=>state)
// const subscribeRenderEntireTree = () => renderEntireTree(reduxStore.getState())
// reduxStore.subscribe(subscribeRenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
