
export type storeType = {
  _state: stateType
  getState: () => stateType
  _callSubscriber: (state: stateType) => void
  sendMessageCallBack: (sendMessage: string) => void
  newMessageChangeCallBack: (newMessageText: string) => void
  newPostChangeCallBack: (NewPostText: string) => void
  addPostCallBack: (newPostAdd: string) => void
  subscribe: (callback: (state: stateType) => void) => void
  dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | NewPosrChangeActionType | SendMessageType | newMessageChangeType;

type AddPostActionType = {
  type: 'ADD-POST'
  newPostAdd: string
}

type NewPosrChangeActionType = {
  type: 'NEW-POST-CHANGE'
  NewPostText: string
}

type SendMessageType = {
  type: 'SEND-MESSAGE'
  sendMessage: string
}

type newMessageChangeType = {
  type: 'NEW_MESSAGE-CHANGE'
  newMessageText: string
}




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
        { id: 2, name: 'Arina', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 3, name: 'Anita', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 4, name: 'Dima', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 5, name: 'Egor', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { id: 6, name: 'Pavel', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' }
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
        { name: 'Pavel', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { name: 'Artyr', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
        { name: 'Dima', ava: 'https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' },
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
    if (action.type === 'ADD-POST') {
      const newPostAddData: postType = {
        id: 5,
        message: action.newPostAdd,
        numberLike: 0

      }
      this._state.postPage.postData.push(newPostAddData)
      this._state.postPage.NewPostMessage = ''
      this._callSubscriber(this._state)
    }
    else if (action.type === 'NEW-POST-CHANGE') {
      this._state.postPage.NewPostMessage = action.NewPostText;

      this._callSubscriber(this._state)
    }
    else if (action.type === 'SEND-MESSAGE') {
      const sendMessageData: messagesType = {
        id: 6,
        message: action.sendMessage,
        myMessage: true
      }
      this._state.messagePage.masseges.push(sendMessageData)
      this._state.messagePage.newMessage = ''
      this._callSubscriber(this._state)
    }
    else if (action.type === 'NEW_MESSAGE-CHANGE') {
      this._state.messagePage.newMessage = action.newMessageText
      this._callSubscriber(this._state)
    }
  }
}

export default store


export type friendsPageType = {
  friends: Array<FriendsType>
}
export type FriendsType = {
  name: string
  ava: string
}

export type messagesType = {
  id: number
  message: string
  myMessage: boolean
}
export type dialogsType = {
  id: number
  name: string
  ava: string
}
export type postType = {
  id: number
  message: string
  numberLike: number
}
export type messagesPageType = {
  masseges: Array<messagesType>
  dialogs: Array<dialogsType>
  newMessage: string

}
export type postPageType = {
  postData: Array<postType>
  NewPostMessage: string
}

export type stateType = {
  messagePage: messagesPageType
  postPage: postPageType
  friendsPage: friendsPageType
}


