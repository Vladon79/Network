import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { ActionType,  postType } from './../../state/state'

type PostType = {
  post: Array<postType>
  dispatch:(action: ActionType) => void
  NewPostMessage: string
}

const Profile = ({ NewPostMessage, dispatch, post, ...props }: PostType) => {

  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.myPost}>
        <MyPost
          post={post}
          dispatch={dispatch}
          NewPostMessage={NewPostMessage}
        />
      </div>
    </div>
  )
}
export default Profile;