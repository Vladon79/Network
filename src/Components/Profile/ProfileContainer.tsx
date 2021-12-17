import React from "react"
import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Profile, { ProfileType } from './Profile';
import { addPost, newPostChange, setUsersProfile } from '../../redux/profile-reducer';
import { postType } from "../../types/types";
import { RouteComponentProps, withRouter } from "react-router";
import { usersAPI } from "../../api/api";

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
}

type ProfileContainerType = MapStateToPropsType & MapDispachToPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    
    let userID = this.props.match.params.userID
    if(!userID){
      userID='2'
    }
    usersAPI.onUserProfile(userID).then(data => {
        this.props.setUsersProfile(data)
      });
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

const mapDispachToProps = (dispatch: any): MapDispachToPropsType => {
  return {
    addPost: (text: string) => {
      dispatch(addPost(text))
    },
    newPostChange: (text: string) => {
      dispatch(newPostChange(text))
    },
    setUsersProfile: (profile: ProfileType) => {
      dispatch(setUsersProfile(profile))
    }
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispachToProps)(WithUrlDataContainerComponent);