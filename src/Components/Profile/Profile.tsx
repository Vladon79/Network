import React from 'react';
import { postType } from '../../types/types';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.scss';
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
  newPostMessage: string
  status:string
  newPostChange: (text: string) => void
  addPost: (text: string) => void
  updateStatus:(status:string)=>void
}

const Profile = (props: PostType) => {
  
  return (
    <div className={s.profile}>
      <div className={s.profileContainer}>
          <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
          <MyPost
            post={props.post}
            newPostChange={props.newPostChange}
            addPost={props.addPost}
            NewPostMessage={props.newPostMessage}
          />
      </div>
    </div>
  )
}
export default Profile;