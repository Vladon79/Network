
import { messagesType, postType, stateType, storeType } from "../types/types";
import { dialogsReduser } from "./dialogs-reduser";


import { profileReduser } from "./profile-reduser";


const store: storeType = {
  _state: {
    messagePage: {
      newMessage: '',
      masseges: [
        { id: 1, message: 'Hi', myMessage: false },
        { id: 2, message: 'How are you', myMessage: true },
        { id: 3, message: 'Where are you from??', myMessage: true },
        { id: 4, message: 'Help', myMessage: false },
        { id: 5, message: 'Hello', myMessage: true }
      ],

      dialogs: [
        { id: 1, name: 'Artem', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 2, name: 'Dima', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 3, name: 'Pavel', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' }
      ]
    },
    postPage: {
      NewPostMessage: '',
      postData: [
        { id: 1, message: 'Today I go to the cinema', numberLike: 12 },
        { id: 2, message: 'Haw are you?', numberLike: 20 },
        { id: 3, message: "It's my firs post!", numberLike: 100 }
      ],
    },
    friendsPage: {
      friends: [
        { id: 1, friends: true, status: 'Super', location: { country: 'Belarus', city: 'Brest' }, name: 'Pavel', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 2, friends: true, status: 'Friends', location: { country: 'Belarus', city: 'Brest' }, name: 'Artyr', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 3, friends: true, status: 'Bos', location: { country: 'Belarus', city: 'Brest' }, name: 'Dima', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
      ]
    }
  },
  getState() {
    return this._state
  },
  subscribe(callback) {
    this._callSubscriber = callback
  },

  _callSubscriber(state: stateType) {
    console.log('Hello')
  },


  sendMessageCallBack(sendMessage: string) {

    const sendMessageData: messagesType = {
      id: 6,
      message: sendMessage,
      myMessage: true
    }
    this._state.messagePage.masseges.push(sendMessageData)
    this._state.messagePage.newMessage = ''
    this._callSubscriber(this._state)
  },
  newMessageChangeCallBack(newMessageText: string) {
    this._state.messagePage.newMessage = newMessageText
    this._callSubscriber(this._state)
  },


  newPostChangeCallBack(NewPostText: string) {
    this._state.postPage.NewPostMessage = NewPostText;

    this._callSubscriber(this._state)

  },
  addPostCallBack(newPostAdd: string) {

    const newPostAddData: postType = {
      id: 5,
      message: newPostAdd,
      numberLike: 0

    }
    this._state.postPage.postData.push(newPostAddData)
    this._state.postPage.NewPostMessage = ''
    this._callSubscriber(this._state)
  },
  dispatch(action) {

    this._state.postPage = profileReduser(this._state.postPage, action)
    this._state.messagePage = dialogsReduser(this._state.messagePage, action)
    // this._state.friendsPage = friendsReduserNav(this._state.friendsPage, action)

    this._callSubscriber(this._state)
  }
}





export default store





