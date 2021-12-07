import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import { followUsers, unfollowUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, } from '../../redux/users-reduser';
import React from "react";
import { UsersType } from "../../types/types";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';


type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followUsers: (friendsID: number) => void
    unfollowUsers: (friendsID: number) => void
    setUsers: (friends: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
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
                unfollowUsers={this.props.unfollowUsers}
                followUsers={this.props.followUsers}
                users={this.props.users}
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
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps,
    { followUsers, unfollowUsers, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })
    (UsersContainer);