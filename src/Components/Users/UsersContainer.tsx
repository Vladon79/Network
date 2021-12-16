import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import { followUser, unfollowUser, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleIsFollowingProgess, UsersType } from '../../redux/users-reducer';
import React from "react";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    followUser: (friendsID: number) => void
    unfollowUser: (friendsID: number) => void
    setUsers: (friends: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgess: (isFetching: boolean, userID: number) => void
}
class UsersContainer extends React.Component<UsersPageType>{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(200)
        });
    }
    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        });
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            < Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                unfollowUser={this.props.unfollowUser}
                followUser={this.props.followUser}
                users={this.props.users}
                toggleIsFollowingProgess={this.props.toggleIsFollowingProgess}
                followingInProgress={this.props.followingInProgress}
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


export default connect(mapStateToProps,
    { followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgess })
    (UsersContainer);