import axios from "axios";
import React from "react";
import { UsersType } from "../../types/types";
import Users from "./Users";


type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    AddUsers: (friendsID: number) => void
    RemoveUsers: (friendsID: number) => void
    SetUsers: (friends: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalUsersCount: number) => void
}

class UsersAPIComponent extends React.Component<UsersPageType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.SetUsers(response.data.items)
            this.props.SetTotalUsersCount(100)

        });
    }
    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.SetUsers(response.data.items)
        });
    }



    render() {
        return < Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChange={this.onPageChange}
            RemoveUsers={this.props.RemoveUsers}
            AddUsers={this.props.AddUsers}
            users={this.props.users}
        />

    }
}

export default UsersAPIComponent