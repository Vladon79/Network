import { NewMessageChangeAC, SendMessageAC } from '../../redux/dialogs-reduser';
import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { Dispatch } from 'redux';


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