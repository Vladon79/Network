import {followSuccess, setCurrentPage, setUsers, unFollowSuccess, usersPageType, usersReducer} from "./users-reducer";

const state: usersPageType = {
    users: [
        {id: 1, followed: false, status: 'help', name: 'Igor', ava: 'string'},
        {id: 2, followed: false, status: 'help', name: 'Pavel', ava: 'string'},
        {id: 3, followed: true, status: 'help', name: 'Dima', ava: 'string'}
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


test('follow for user', () => {

    let action = followSuccess(1)
    let newState = usersReducer(state, action)

    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[1].followed).toBe(false)
})

test('unfollow for user', () => {

    let action = unFollowSuccess(3)
    let newState = usersReducer(state, action)

    expect(newState.users[2].followed).toBe(false)
    expect(newState.users[1].followed).toBe(false)
})

test('set user', () => {

    let action = setUsers([
        {
            id: 4,
            followed: false,
            status: 'help',
            name: 'Vera',
            ava: 'string'
        },
        {
            id: 5,
            followed: false,
            status: 'help',
            name: 'Kot',
            ava: 'string'
        }],)
    let newState = usersReducer(state, action)

    expect(newState.users.length).toBe(2)

})




