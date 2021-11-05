import React from "react";
import { FriendsType } from "../../types/types";
import s from './Friends.module.css';

type FriendsPageType = {
    friends: Array<FriendsType>
    AddFriends: (friendsID: number) => void
    RemoveFriends: (friendsID: number) => void
    SetFriends: (friends: Array<FriendsType>) => void
}

const Friends = (props: FriendsPageType) => {



    return (

        <div className={s.div}>

            {props.friends.map(f => <div key={f.id} className={s.friendsPage}>
                <div className={s.AvaButton}>
                    <div className={s.avaDiv}>
                        <img src={f.ava} className={s.ava} />
                    </div>
                    <div className={s.buttonDiv}>
                        {f.friends ?
                            <button onClick={() => props.RemoveFriends(f.id)} className={s.button}>Remove</button>
                            : <button onClick={() => { props.AddFriends(f.id)}} className={s.button}>Add</button>}

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

export default Friends