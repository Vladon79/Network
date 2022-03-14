import React from "react";
import s from './Users.module.scss';
import {UserType} from "../../redux/users-reducer";
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

type UsersPageTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChange: (p: number) => void
    unFollowSuccess: (id: number) => void
    followSuccess: (id: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
    users: Array<UserType>
}

const Users = React.memo(({totalUsersCount, pageSize, currentPage, onPageChange, ...props}: UsersPageTypeProps) => {
    return (
        <div className={s.users}>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChange={onPageChange} portionSize={20}/>

            {
                props.users.map(u => <User key={u.id} user={u} follow={props.follow} unFollow={props.unFollow}
                                           followingInProgress={props.followingInProgress}/>)
            }
        </div>
    )
})

export default Users