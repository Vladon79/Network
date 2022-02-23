import {addPost, deletePost, postPageType, profileReducer} from "./profile-reducer";

const state: postPageType = {
    postData: [
        {id: 1, message: 'Today I go to the cinema', numberLike: 12},
        {id: 2, message: 'Haw are you?', numberLike: 20},
        {id: 3, message: "It's my firs post!", numberLike: 100}
    ],
    profile: null,
    status: '',
}

test('new post should be added', () => {

    let action = addPost('new post')
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(4)
    expect(newState.postData[3].message).toBe('new post')
})

test('delete post', () => {

    let action = deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(2)
    expect(newState.postData[0].message).toBe('Haw are you?')
})

