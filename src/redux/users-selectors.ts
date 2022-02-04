import {AppStoreType} from "./redux-store";

export const getUsers = (state: AppStoreType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStoreType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStoreType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStoreType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStoreType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStoreType) => {
    return state.usersPage.followingInProgress
}

