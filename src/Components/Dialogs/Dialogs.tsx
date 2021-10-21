import React, { ChangeEvent } from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Messages from './Message/Message';
import { messagesType, dialogsType, ActionType } from './../../state/state'

type DialogsType = {
  newMessage: string
  messages: Array<messagesType>
  dialogs: Array<dialogsType>
  dispatch: (action: ActionType) => void

}

const Dialogs = ({ dispatch, newMessage, messages, dialogs, ...props }: DialogsType) => {

  const messagesElement = messages.map(m => <Messages textMesage={m.message} myMassege={m.myMessage} />)
  const dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} ava={d.ava} />)

  const sendMessage = React.createRef<HTMLTextAreaElement>()

  const sendMessageOnClickHandler = () => {
    if (sendMessage.current) {
      dispatch({ type: 'SEND-MESSAGE', sendMessage: sendMessage.current.value })
      sendMessage.current.value = ''
    }
  }

  const onChangeHandlerNewMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (sendMessage.current) {
      dispatch({ type: "NEW_MESSAGE-CHANGE", newMessageText: sendMessage.current.value })
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