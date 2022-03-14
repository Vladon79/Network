import {connect} from 'react-redux';
import {AppStoreType} from '../../redux/redux-store';
import {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    UserType,
    follow,
    unFollow,
    requestUsers
} from '../../redux/users-reducer';
import React from "react";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    followSuccess: (friendsID: number) => void
    unFollowSuccess: (friendsID: number) => void
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}

class UsersContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChange = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            < Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                unFollowSuccess={this.props.unFollowSuccess}
                followSuccess={this.props.followSuccess}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppStoreType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {followSuccess, unFollowSuccess, setCurrentPage, follow, unFollow, requestUsers}))
(UsersContainer)

