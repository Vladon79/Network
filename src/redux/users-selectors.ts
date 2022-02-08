import {createSelector} from "reselect";
import {AppStoreType} from "./redux-store";

export const getUsersSelector = (state: AppStoreType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

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

