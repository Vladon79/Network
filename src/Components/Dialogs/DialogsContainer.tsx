
import { NewMessageChangeAC, SendMessageAC } from '../../redux/dialogs-reduser';
import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { Dispatch } from 'redux';

// type DialogsType = {
//   store: Store<any, ActionType>
// }

// const DialogsContainer = ({ store, ...props }: DialogsType) => {

//   const dialogs = useSelector<AppStoreType, Array<dialogsType>>(state => state.messagePage.dialogs)
//   const messages = useSelector<AppStoreType, Array<messagesType>>(state => state.messagePage.masseges)
// const newMessage = useSelector<AppStoreType, string>(state => state.messagePage.newMessage)

//   const SendMessage = (text: string) => {
//     store.dispatch(SendMessageAC(text))
//   }

//   const NewMessageChange = (text: string) => {
//     store.dispatch(NewMessageChangeAC(text))
//   }

//   return <Dialogs
//     newMessage={newMessage}
//     messages={messages}
//     dialogs={dialogs}
//     SendMessage={SendMessage}
//     NewMessageChange={NewMessageChange} />
// }

const mapStateToProps = (state: AppStoreType) => {
  return {
    newMessage: state.messagePage.newMessage,
    messages: state.messagePage.masseges,
    dialogs: state.messagePage.dialogs
  }
}

const mapDispachToProps = (dispatch: Dispatch) => {
  return {
    SendMessage: (text: string) => {
      dispatch(SendMessageAC(text))
    },
    NewMessageChange: (text: string) => {
      dispatch(NewMessageChangeAC(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs)
export default DialogsContainer;