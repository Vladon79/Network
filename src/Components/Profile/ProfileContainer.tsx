import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import Profile from './Profile';
import { AddPostAC, NewPostChangeAC } from '../../redux/profile-reduser';

// type PostType = {
//   store: Store<any, ActionType>
// }

// const ProfileContainer = (props: PostType) => {
//   const post = useSelector<AppStoreType, Array<postType>>(state => state.postPage.postData)
//   const NewPostMessage = useSelector<AppStoreType, string>(state => state.postPage.NewPostMessage)

//   const newPostChange = (text: string) => {
//     props.store.dispatch(NewPostChangeAC(text))

//   }

//   const addPost = (text: string) => {
//     props.store.dispatch(AddPostAC(text))
//   }

//   return <Profile
//     post={post}
//     addPost={addPost}
//     newPostChange={newPostChange}
//     NewPostMessage={NewPostMessage}
//   />
// }

const mapStateToProps = (state: AppStoreType) => {
  return {
    post: state.postPage.postData,
    NewPostMessage:state.postPage.NewPostMessage
  }
}

const mapDispachToProps = (dispatch:any) => {
  return {
    addPost:(text: string)=>{
      dispatch(AddPostAC(text))
    },
    newPostChange:(text: string)=>{
      dispatch(NewPostChangeAC(text))
    }
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispachToProps)(Profile);
export default ProfileContainer;