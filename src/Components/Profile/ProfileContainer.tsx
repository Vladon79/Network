import React from 'react';
import { useSelector } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import { ActionType, postType } from '../../types/types';
import Profile from './Profile';
import { Store } from 'redux';
import { AddPostAC, NewPostChangeAC } from '../../redux/profile-reduser';

type PostType = {
  store: Store<any, ActionType>
}

const ProfileContainer = (props: PostType) => {
  const post = useSelector<AppStoreType, Array<postType>>(state => state.postPage.postData)
  const NewPostMessage = useSelector<AppStoreType, string>(state => state.postPage.NewPostMessage)

  const newPostChange = (text: string) => {
    props.store.dispatch(NewPostChangeAC(text))
   
  }

  const addPost = (text: string) => {
    props.store.dispatch(AddPostAC(text))
  }

  return <Profile
    post={post}
    addPost={addPost}
    newPostChange={newPostChange}
    NewPostMessage={NewPostMessage}
  />
}
export default ProfileContainer;