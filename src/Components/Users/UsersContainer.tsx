import { connect } from 'react-redux';
import { AppStoreType } from '../../redux/redux-store';
import { AddUsersAC, RemoveUsersAC, SetCurrentPageAC, SetTotalUsersCountAC, SetUsersAC, ToggleIsFetchingAC, } from '../../redux/users-reduser';
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
    AddUsers: (friendsID: number) => void
    RemoveUsers: (friendsID: number) => void
    SetUsers: (friends: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalUsersCount: number) => void
    ToggleIsFetching: (isFetching: boolean) => void
}
class UsersContainer extends React.Component<UsersPageType>{

    componentDidMount() {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(response.data.items)
                this.props.SetTotalUsersCount(100)

            });
    }
    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(response.data.items)
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
                RemoveUsers={this.props.RemoveUsers}
                AddUsers={this.props.AddUsers}
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

const mapDispachToProps = (dispatch: any) => {
    return {
        AddUsers: (usersID: number) => {
            dispatch(AddUsersAC(usersID))

        },
        RemoveUsers: (usersID: number) => {
            dispatch(RemoveUsersAC(usersID))
        },
        SetUsers: (users: Array<UsersType>) => {

            dispatch(SetUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage))
        },
        SetTotalUsersCount: (totalUsersCount: number) => {
            dispatch(SetTotalUsersCountAC(totalUsersCount))
        },
        ToggleIsFetching: (isFetching: boolean) => {
            dispatch(ToggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(UsersContainer);