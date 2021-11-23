import React from "react";
import { UsersType } from "../../types/types";
import s from './Users.module.css';
import userPhoto from './../../assents/image/user.png'

type UsersPageTypeProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
    RemoveUsers: (id: number) => void
    AddUsers: (id: number) => void
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
                props.users.map(f => <div key={f.id} className={s.friendsPage}>
                    <div className={s.AvaButton}>
                        <div className={s.avaDiv}>
                            <img src={f.ava ? f.ava : userPhoto} className={s.ava} />
                        </div>
                        <div className={s.buttonDiv}>
                            {f.friends ?
                                <button onClick={() => props.RemoveUsers(f.id)} className={s.button}>Remove</button>
                                :
                                <button onClick={() => props.AddUsers(f.id)} className={s.button}>Add</button>}

                        </div>
                    </div>

                    <div className={s.NameStatus}>
                        <div className={s.name}>{f.name}</div>
                        <div>status:{f.status}</div>
                    </div>
                    <div>
                        <div>country:{f.location?.country}</div>
                        <div>city:{f.location?.city}</div>
                    </div>

                </div>)
            }
        </div>
    )


}

export default Users