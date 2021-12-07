import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { authDataType, setAuthUserData } from '../../redux/auth-reduser';
import { AppStoreType } from '../../redux/redux-store';
import Header from './Header';

type PropsType = {
  isAuth: boolean
  login: string
  setAuthUserData: (data: authDataType) => void
}


class HeaderContainer extends React.Component<PropsType> {
  componentDidMount() {
    usersAPI.authMe().then(data => {
        if (data.resultCode === 0) {
          this.props.setAuthUserData(data.data)
        }

      });
  }

  render() {
    return <Header isAuth={this.props.isAuth} login = {this.props.login}/>
  }
}

type mapStateToPropsType = { 
  isAuth: boolean
  login: string
}

const mapStateToProps = (state: AppStoreType): mapStateToPropsType=> ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);