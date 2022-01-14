
import { followUser, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowingProgess, unfollowUser, usersPageType, usersReducer } from "./users-reducer";

test('follow to user', () => {
    const startState: usersPageType = {
        users: [{
            id: 1,
            followed: false,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Dima',
            ava: 'string'
        },
        {
            id: 2,
            followed: false,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Pavel',
            ava: 'string'
        },{
            id: 3,
            followed: true,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Vlad',
            ava: 'string'
        },],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };
 
    const action = followUser(1);
 
    const endState = usersReducer(startState, action)
 
    expect(endState.users[0].followed).toBe(true);
    expect(endState.users[1].followed).toBe(false);
 })

 test('unfollow to user', () => {
    const startState: usersPageType = {
        users: [{
            id: 1,
            followed: false,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Dima',
            ava: 'string'
        },
        {
            id: 2,
            followed: false,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Pavel',
            ava: 'string'
        },{
            id: 3,
            followed: true,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Vlad',
            ava: 'string'
        },],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };
 
    const action = unfollowUser(3);
 
    const endState = usersReducer(startState, action)
 
    expect(endState.users[1].followed).toBe(false);
    expect(endState.users[2].followed).toBe(false);
 })

 test('set user', () => {
    const startState: usersPageType = {
        users: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };

    const users = [{
        id: 1,
        followed: false,
        status: 'status',
        location: {
            city: 'Brest',
            country: 'Belarus'
        },
        name: 'Dima',
        ava: 'string'
    },
    {
        id: 2,
        followed: false,
        status: 'status',
        location: {
            city: 'Brest',
            country: 'Belarus'
        },
        name: 'Pavel',
        ava: 'string'
    }]
 
    const action = setUsers(users);
 
    const endState = usersReducer(startState, action)
 
    expect(endState.users.length).toBe(2);
    expect(endState.users[1].id).toBe(2);
 })

 test('set current page', () => {
    const startState: usersPageType = {
        users: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };

 
 
    const action = setCurrentPage(2);
 
    const endState = usersReducer(startState, action)
 
    expect(endState.currentPage).toBe(2);
 })

 test('set total ysers count', () => {
    const startState: usersPageType = {
        users: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };

 
 
    const action = setTotalUsersCount(300);
 
    const endState = usersReducer(startState, action)
 
    expect(endState.totalUsersCount).toBe(300);
 })

 test('toggle is fetching', () => {
    const startState: usersPageType = {
        users: [],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: []
    };

 
 
    const action = toggleIsFetching(false);
 
    const endState = usersReducer(startState, action)
 
    expect(endState.isFetching).toBe(false);
 })

 test('toggle is following progress', () => {
    const startState: usersPageType = {
        users: [{
            id: 1,
            followed: false,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Dima',
            ava: 'string'
        },
        {
            id: 2,
            followed: false,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Pavel',
            ava: 'string'
        },{
            id: 3,
            followed: true,
            status: 'status',
            location: {
                city: 'Brest',
                country: 'Belarus'
            },
            name: 'Vlad',
            ava: 'string'
        },],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    };

 
 
    const action = toggleIsFollowingProgess(true, 2);
 
    const endState = usersReducer(startState, action)
 
    expect(endState.followingInProgress.length).toBe(1);
    expect(endState.followingInProgress[0]).toBe(2);
 })