import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import { addUsers, removeUsers, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, } from '../../redux/users-reduser';
import axios from "axios";
import React from "react";
import { UsersType } from "../../types/types";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';

type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    addUsers: (friendsID: number) => void
    removeUsers: (friendsID: number) => void
    setUsers: (friends: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
class UsersContainer extends React.Component<UsersPageType>{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(200)

            });
    }
    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
                RemoveUsers={this.props.removeUsers}
                AddUsers={this.props.addUsers}
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
    { addUsers, removeUsers, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })
    (UsersContainer);