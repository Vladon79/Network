import React from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { postType } from './../../state/state'

type PostType = {
  post: Array<postType>
  addPostCallBack: (newPostAdd: string) => void
  NewPostMessage: string
  newPostChangeCallBack: (NewPostText: string) => void
}

const Profile = ({ newPostChangeCallBack,NewPostMessage, addPostCallBack, post, ...props }: PostType) => {

  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.myPost}>
        <MyPost
          post={post}
          addPostCallBack={addPostCallBack}
          NewPostMessage={NewPostMessage}
          newPostChangeCallBack={newPostChangeCallBack}
        />
      </div>
    </div>
  )
}
export default Profile;