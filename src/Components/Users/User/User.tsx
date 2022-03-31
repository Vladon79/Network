import React from "react";
import s from './User.module.scss';
import userPhoto from './../../../assents/image/user.png'
import {NavLink} from "react-router-dom";
import {UserType} from "../../../redux/users-reducer";
import Button from "../../common/Button/Button";


type UserPagePropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (id: number) => void
    unFollow: (id: number) => void
}

const User = ({user, ...props}: UserPagePropsType) => {
    console.log(user)
    return (
        <div className={s.userPage}>
            <div className={s.avaButton}>
                <div className={s.avaDiv}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.large !== null ? user.photos.large : userPhoto} className={s.ava}/>
                    </NavLink>
                </div>
                <div className={s.buttonDiv}>
                    {
                        user.followed ?
                            <Button className={s.userButton} onClick={() => props.unFollow(user.id)} title={'Unfollow'}
                                    disabled={props.followingInProgress.some(id => id === user.id)}/>
                            :
                            <Button className={s.userButton} onClick={() => props.follow(user.id)} title={'Follow'}
                                    disabled={props.followingInProgress.some(id => id === user.id)}/>
                    }
                </div>
            </div>
            <div className={s.info}>
                <div className={s.NameStatus}>
                    <h4 className={s.name}>{user.name}</h4>
                    <p className={s.userInfo}>status: {user.status}</p>
                </div>
            </div>
        </div>
    )
}

export default User