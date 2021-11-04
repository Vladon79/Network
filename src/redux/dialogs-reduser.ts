import { ActionType, messagesPageType, messagesType } from "../types/types"


type InitialStateTipe = messagesPageType

const InitialState: InitialStateTipe = {
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
}

export const dialogsReduser = (state: messagesPageType = InitialState, action: ActionType) => {

    switch (action.type) {
        case 'SEND-MESSAGE': {
            const sendMessageData: messagesType = {
                id: 6,
                message: action.sendMessage,
                myMessage: true
            }
            let stateCopy = { ...state }
            stateCopy.masseges = [...state.masseges]
            stateCopy.masseges.push(sendMessageData)
            stateCopy.newMessage = ''
            return stateCopy;
        }
        case 'NEW_MESSAGE-CHANGE': {
            let stateCopy = { ...state }
            stateCopy.newMessage = action.newMessageText
            return stateCopy;
        }
        default:
            return state;

    }
}

export const SendMessageAC = (sendMessage: string) => {
    return {
        type: 'SEND-MESSAGE',
        sendMessage: sendMessage
    } as const
}

export const NewMessageChangeAC = (newMessageText: string) => {
    return {
        type: 'NEW_MESSAGE-CHANGE',
        newMessageText: newMessageText
    } as const
}