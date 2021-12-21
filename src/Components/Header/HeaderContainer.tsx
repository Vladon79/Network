import React from 'react';
import { connect } from 'react-redux';
import { authDataType, setAuthUserData, authMe } from '../../redux/auth-reduser';
import { AppStoreType } from '../../redux/redux-store';
import Header from './Header';

type PropsType = {
  isAuth: boolean
  login: string
  setAuthUserData: (data: authDataType) => void
  authMe: () => void
}


class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.authMe()
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />
  }
}

type mapStateToPropsType = {
  isAuth: boolean
  login: string
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})


export default connect(mapStateToProps, { setAuthUserData, authMe })(HeaderContainer);