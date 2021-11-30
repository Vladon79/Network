import React from 'react';
import { postType } from '../../types/types';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfileType = {
  aboutMe: string
  contacts: { facebook: string, website: string, vk: string, twitter: string, instagram: string }
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: { small: string, large: string }
  userId: number
}


type PostType = {
  profile: ProfileType
  post: Array<postType>
  NewPostMessage: string
  newPostChange: (text: string) => void
  addPost: (text: string) => void
}

const Profile = (props: PostType) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <ProfileInfo profile={props.profile} />
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