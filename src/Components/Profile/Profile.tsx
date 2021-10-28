import React from 'react';
import { postType } from '../../types/types';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


type PostType = {
  post: Array<postType>
  NewPostMessage: string
  newPostChange: (text: string) => void
  addPost: (text: string) => void
}

const Profile = (props: PostType) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <ProfileInfo />
      </div>
      <div className={s.myPost}>
        <MyPost
          post={props.post}
          newPostChange={props.newPostChange}
          addPost={props.addPost}
          NewPostMessage={props.NewPostMessage}
        />
      </div>
    </div>
  )
}
export default Profile;