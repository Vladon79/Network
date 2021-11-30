import React from "react"
import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Profile, { ProfileType } from './Profile';
import { AddPostAC, NewPostChangeAC, setUsersProfile } from '../../redux/profile-reduser';
import { postType } from "../../types/types";
import axios from "axios";

type ProfileContainerType = {
  profile: any
  post: Array<postType>
  NewPostMessage: string
  newPostChange: (text: string) => void
  addPost: (text: string) => void
  setUsersProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        debugger
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

const mapStateToProps = (state: AppStoreType) => {
  return {
    profile: state.postPage.profile,
    post: state.postPage.postData,
    NewPostMessage: state.postPage.NewPostMessage
  }
}

const mapDispachToProps = (dispatch: any) => {
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


export default connect(mapStateToProps, mapDispachToProps)(ProfileContainer);