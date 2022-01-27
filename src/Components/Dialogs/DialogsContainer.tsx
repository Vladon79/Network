import {  SendMessageAC } from '../../redux/dialogs-reduser';
import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { compose, Dispatch } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import React from 'react';


const mapStateToProps = (state: AppStoreType) => {
  return {
    messages: state.messagePage.masseges,
    dialogs: state.messagePage.dialogs,
    isAuth: state.auth.isAuth
  }
}

const mapDispachToProps = (dispatch: Dispatch) => {
  return {
    SendMessage: (text: string) => {
      dispatch(SendMessageAC(text))
    },
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispachToProps)
)(Dialogs)