import React from "react";

import s from './Users.module.css';
import userPhoto from './../../assents/image/user.png'
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import { UsersType } from "../../redux/users-reducer";

type UsersPageTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChange: (p: number) => void
    unfollowUser: (id: number) => void
    followUser: (id: number) => void
    toggleIsFollowingProgess: (isFetching: boolean, userID: number) => void
    users: Array<UsersType>
}

const Users = (props: UsersPageTypeProps) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const unfollowOnClickHandler = (id: number) => {
        props.toggleIsFollowingProgess(true, id)
        usersAPI.unFollowToUser(id).then(data => {
            if (data.resultCode === 0) {
                props.unfollowUser(id)
            }
            props.toggleIsFollowingProgess(false, id)
        });
    }

    const followOnClickHandler = (id: number) => {
        props.toggleIsFollowingProgess(true, id)
        usersAPI.followToUser(id).then(data => {
            if (data.resultCode === 0) {
                props.followUser(id)
            }
            props.toggleIsFollowingProgess(false, id)
        });
    }

    return (
        <div className={s.div}>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => props.onPageChange(p)}>{p}</span>
                    )

                })}

            </div>

            {
                props.users.map(u => <div key={u.id} className={s.friendsPage}>
                    <div className={s.AvaButton}>
                        <div className={s.avaDiv}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.ava ? u.ava : userPhoto} className={s.ava} />
                            </NavLink>
                        </div>
                        <div className={s.buttonDiv}>
                            {
                                u.followed ?
                                    <button onClick={() => unfollowOnClickHandler(u.id)} disabled={props.followingInProgress.some(id => id === u.id)} className={s.button}>Unfollow</button>
                                    :
                                    <button onClick={() => followOnClickHandler(u.id)} disabled={props.followingInProgress.some(id => id === u.id)} className={s.button}>Follow</button>}
                        </div>
                    </div>

                    <div className={s.NameStatus}>
                        <div className={s.name}>{u.name}</div>
                        <div>status:{u.status}</div>
                    </div>
                    <div>
                        <div>country:{u.location?.country}</div>
                        <div>city:{u.location?.city}</div>
                    </div>

                </div>)
            }
        </div>
    )


}

export default Users