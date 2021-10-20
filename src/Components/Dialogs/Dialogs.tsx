import React, { ChangeEvent } from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';
import { messagesType, dialogsType } from './../../state/state'

type DialogsType = {
  newMessage: string
  messages: Array<messagesType>
  dialogs: Array<dialogsType>
  sendMessageCallBack: (sendMessage: string) => void
  newMessageChangeCallBack: (newMessageText: string) => void
}

const Dialogs = ({ newMessageChangeCallBack, newMessage, messages, dialogs, sendMessageCallBack, ...props }: DialogsType) => {

  const messagesElement = messages.map(m => <Messages textMesage={m.message} myMassege={m.myMessage} />)
  const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

  const sendMessage = React.createRef<HTMLTextAreaElement>()

  const sendMessageOnClickHandler = () => {
    if (sendMessage.current) {
      sendMessageCallBack(sendMessage.current.value)
      sendMessage.current.value = ''
    }
  }

  const onChangeHandlerNewMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (sendMessage.current) {
      newMessageChangeCallBack(sendMessage.current.value)
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
          <textarea ref={sendMessage} value={newMessage} onChange={onChangeHandlerNewMessage}></textarea>

          <button onClick={sendMessageOnClickHandler}>/^\</button>

        </div>
      </div>


    </div>

  )
}
export default Dialogs;