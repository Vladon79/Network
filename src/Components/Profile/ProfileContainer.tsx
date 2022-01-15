import { connect } from 'react-redux';
import React from "react"
import { AppStoreType } from '../../redux/redux-store';
import Profile, { ProfileType } from './Profile';
import { addPost, newPostChange, setUsersProfile, getUserProfile } from '../../redux/profile-reducer';
import { postType } from "../../types/types";
import { RouteComponentProps, withRouter } from "react-router";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type PathParamsType = {
  userID: string
}

type MapStateToPropsType = {
  profile: any
  post: postType[]
  NewPostMessage: string
}

type MapDispachToPropsType = {
  addPost: (text: string) => void
  newPostChange: (text: string) => void
  setUsersProfile: (profile: ProfileType) => void
  getUserProfile: (userId: string) => void
}

type ProfileContainerType = MapStateToPropsType & MapDispachToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {

    let userID = this.props.match.params.userID
    if (!userID) {
      userID = '2'
    }
    this.props.getUserProfile(userID)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
  return {
    profile: state.postPage.profile,
    post: state.postPage.postData,
    NewPostMessage: state.postPage.NewPostMessage
  }
}

export default compose <React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, { addPost, newPostChange, setUsersProfile, getUserProfile }),
  withRouter,
  withAuthRedirect)
  (ProfileContainer)