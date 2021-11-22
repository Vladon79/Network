import axios from "axios";
import { userInfo } from "os";
import React from "react";
import { UsersType } from "../../types/types";
import s from './Users.module.css';
import userPhoto from './../../assents/image/user.png'

type UsersPageType = {
    friends: Array<UsersType>
    AddFriends: (friendsID: number) => void
    RemoveFriends: (friendsID: number) => void
    SetFriends: (friends: Array<UsersType>) => void
}

const Users = (props: UsersPageType) => {

    if (props.friends.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {                       
            props.SetFriends(response.data.items)
        });
    }
    


    return (

        <div className={s.div}>

            {props.friends.map(f => <div key={f.id} className={s.friendsPage}>
                <div className={s.AvaButton}>
                    <div className={s.avaDiv}>
                        <img src={f.ava ? f.ava : userPhoto} className={s.ava} />
                    </div>
                    <div className={s.buttonDiv}>
                        {f.friends ?
                            <button onClick={() => props.RemoveFriends(f.id)} className={s.button}>Remove</button>
                            : <button onClick={() => { props.AddFriends(f.id) }} className={s.button}>Add</button>}

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