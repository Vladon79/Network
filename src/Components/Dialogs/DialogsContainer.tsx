import React from 'react';
import { NewMessageChangeAC, SendMessageAC } from '../../redux/dialogs-reduser';
import { useSelector } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import { ActionType, dialogsType, messagesType } from '../../types/types';
import Dialogs from './Dialogs';
import { Store } from 'redux';

type DialogsType = {
  store: Store<any, ActionType>
}

const DialogsContainer = ({ store, ...props }: DialogsType) => {

  const dialogs = useSelector<AppStoreType, Array<dialogsType>>(state => state.messagePage.dialogs)
  const messages = useSelector<AppStoreType, Array<messagesType>>(state => state.messagePage.masseges)
  const newMessage = useSelector<AppStoreType, string>(state => state.messagePage.newMessage)

  const SendMessage = (text: string) => {
    store.dispatch(SendMessageAC(text))
  }

  const NewMessageChange = (text: string) => {
    store.dispatch(NewMessageChangeAC(text))
  }

  return <Dialogs
    newMessage={newMessage}
    messages={messages}
    dialogs={dialogs}
    SendMessage={SendMessage}
    NewMessageChange={NewMessageChange}/>
}
export default DialogsContainer;