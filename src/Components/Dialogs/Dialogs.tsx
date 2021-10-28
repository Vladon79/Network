import React, { ChangeEvent } from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';
import {  dialogsType, messagesType } from '../../types/types';

type DialogsType = {
  newMessage: string
  messages: Array<messagesType>
  dialogs: Array<dialogsType>
  NewMessageChange: (text: string) => void
  SendMessage: (text: string) => void
}

const Dialogs = (props: DialogsType) => {

  const messagesElement = props.messages.map(m => <Messages textMesage={m.message} myMassege={m.myMessage} />)
  const dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

  const sendMessage = React.createRef<HTMLTextAreaElement>()

  const sendMessageOnClickHandler = () => {
    if (sendMessage.current) {
      props.SendMessage(sendMessage.current.value)
      console.log('ON'+sendMessage.current.value)
      sendMessage.current.value = ''
    }
  }

  const onChangeHandlerNewMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (sendMessage.current) {
      props.NewMessageChange(sendMessage.current.value)
      console.log(props.newMessage)
    }
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>

        {dialogsElement}
      </div>

      <div className={s.messages}>
        {messagesElement}
        <div className={s.addMessage}>
          <textarea ref={sendMessage} value={props.newMessage} onChange={onChangeHandlerNewMessage}></textarea>

          <button onClick={sendMessageOnClickHandler}>Send</button>

        </div>
      </div>
    </div>
  )
}
export default Dialogs;