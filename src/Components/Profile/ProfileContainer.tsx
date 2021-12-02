import React from "react"
import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Profile, { ProfileType } from './Profile';
import { AddPostAC, NewPostChangeAC, setUsersProfile } from '../../redux/profile-reduser';
import { postType } from "../../types/types";
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router";

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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
      .then(response => {

        this.props.setUsersProfile(response.data)
        // this.props.setTotalUsersCount(100)

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
      dispatch(AddPostAC(text))
    },
    newPostChange: (text: string) => {
      dispatch(NewPostChangeAC(text))
    },
    setUsersProfile: (profile: ProfileType) => {
      dispatch(setUsersProfile(profile))
    }
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispachToProps)(WithUrlDataContainerComponent);