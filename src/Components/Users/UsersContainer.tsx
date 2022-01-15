import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import { followSuccess, unFollowSuccess, setCurrentPage, UsersType, getUsers, follow, unFollow } from '../../redux/users-reducer';
import React from "react";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';

type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    followSuccess: (friendsID: number) => void
    unFollowSuccess: (friendsID: number) => void
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}
class UsersContainer extends React.Component<UsersPageType>{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(200)
        // });
    }
    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, { followSuccess, unFollowSuccess, setCurrentPage, getUsers, follow, unFollow }))
    (UsersContainer)

