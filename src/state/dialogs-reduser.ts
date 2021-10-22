import { ActionType, messagesPageType, messagesType } from "./state";

export const dialogsReduser = (state: messagesPageType, action: ActionType) => {
    if (action.type === 'SEND-MESSAGE') {
        const sendMessageData: messagesType = {
            id: 6,
            message: action.sendMessage,
            myMessage: true
        }
        state.masseges.push(sendMessageData)
        state.newMessage = ''

    }
    else if (action.type === 'NEW_MESSAGE-CHANGE') {
        state.newMessage = action.newMessageText

    }

    return state;

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