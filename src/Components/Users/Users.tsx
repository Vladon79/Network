import React, { useState } from "react";
import s from './Users.module.scss';
import userPhoto from './../../assents/image/user.png'
import { NavLink } from "react-router-dom";
import { UserType } from "../../redux/users-reducer";
import Button from "../common/Button/Button";
import User from "./User/User";

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

const Users = React.memo((props: UsersPageTypeProps) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.pageNumber}>
                {pages.map(p => <span key={p}
                    className={props.currentPage === p ? s.selectedPage : s.notselectpage}
                    onClick={() => props.onPageChange(p)}>{p}</span>
                )
                }

            </div>

            {
                props.users.map(u => <User key={u.id} user={u} follow={props.follow} unFollow={props.unFollow} followingInProgress={props.followingInProgress} />)
            }
        </div>
    )
})

export default Users