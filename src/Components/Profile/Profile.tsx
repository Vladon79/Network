import React from 'react';
import {postType} from '../../types/types';
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
    isOwner:boolean
    post: Array<postType>
    status: string
    newPostChange: (text: string) => void
    addPost: (text: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: any) => void
    saveProfile:(formData:ProfileType)=>void
}

const Profile = (props: PostType) => {

    return (
        <div className={s.profile}>
            <div className={s.profileContainer}>
                <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
                <MyPost
                    post={props.post}
                    newPostChange={props.newPostChange}
                    addPost={props.addPost}
                />
            </div>
        </div>
    )
}
export default Profile;