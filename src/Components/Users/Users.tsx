import React from "react";
import { UsersType } from "../../types/types";
import s from './Users.module.css';
import userPhoto from './../../assents/image/user.png'
import { NavLink } from "react-router-dom";
import axios from "axios";

type UsersPageTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
    unfollowUsers: (id: number) => void
    followUsers: (id: number) => void
    users: Array<UsersType>
}

const Users = (props: UsersPageTypeProps) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
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

                                    <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "89087f1a-df84-4609-ac91-9f089fdba243"
                                                }
                                            })
                                            .then(response => {

                                                if (response.data.resultCode === 0) {
                                                    props.unfollowUsers(u.id)
                                                }
                                            });
                                    }
                                    } className={s.button}>Unfollow</button>
                                    :
                                    <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {

                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "89087f1a-df84-4609-ac91-9f089fdba243"
                                                }
                                            })
                                            .then(response => {

                                                if (response.data.resultCode === 0) {
                                                    props.followUsers(u.id)
                                                }
                                            });
                                    }
                                    } className={s.button}>Follow</button>}




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