import { addPost, newPostChange, postPageType, profileReducer, setUsersProfile } from "./profile-reducer";


test('add post', () => {
  const startState: postPageType = {
    NewPostMessage: '',
    postData: [
      { id: 1, message: 'Today I go to the cinema', numberLike: 12 },
      { id: 2, message: 'Haw are you?', numberLike: 20 },
      { id: 3, message: "It's my firs post!", numberLike: 100 }
    ],
    profile:null
  }
      
  const action = addPost('new post');

  const endState = profileReducer(startState, action)

  expect(endState.postData.length).toBe(4);
  expect(endState.postData[3].message).toBe('new post');
  expect(endState.postData[3].id).toBe(5);
})

test('new post text', () => {
  const startState: postPageType = {
    NewPostMessage: '',
    postData: [
      { id: 1, message: 'Today I go to the cinema', numberLike: 12 },
      { id: 2, message: 'Haw are you?', numberLike: 20 },
      { id: 3, message: "It's my firs post!", numberLike: 100 }
    ],
    profile:null
  }     
  const action = newPostChange('new post');

  const endState = profileReducer(startState, action)

  expect(endState.NewPostMessage).toBe('new post');
})

test('set user profile', () => {
  const startState: postPageType = {
    NewPostMessage: '',
    postData: [
      { id: 1, message: 'Today I go to the cinema', numberLike: 12 },
      { id: 2, message: 'Haw are you?', numberLike: 20 },
      { id: 3, message: "It's my firs post!", numberLike: 100 }
    ],
    profile:null
  }     
  const action = setUsersProfile('new user');

  const endState = profileReducer(startState, action)

  expect(endState.profile).toBe('new user');
})