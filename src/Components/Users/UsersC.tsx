import axios from "axios";
import { userInfo } from "os";
import React from "react";
import { UsersType } from "../../types/types";
import s from './Users.module.css';
import userPhoto from './../../assents/image/user.png'

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

class Users extends React.Component<UsersPageType>{

    componentDidMount() {

        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

                this.props.SetUsers(response.data.items)
                this.props.SetTotalUsersCount(100)

            });
        }
        catch (err) {
            console.log(err);
        }
    }
    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.SetUsers(response.data.items)
        });
    }



    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (

            <div className={s.div}>
                <div>
                    {pages.map(p => {
                        return (
                            <span className={this.props.currentPage === p ? s.selectedPage : ''}
                                onClick={() => this.onPageChange(p)}>{p}</span>
                        )

                    })}
                    {/* <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span> */}
                </div>

                {
                    this.props.users.map(f => <div key={f.id} className={s.friendsPage}>
                        <div className={s.AvaButton}>
                            <div className={s.avaDiv}>
                                <img src={f.ava ? f.ava : userPhoto} className={s.ava} />
                            </div>
                            <div className={s.buttonDiv}>
                                {f.friends ?
                                    <button onClick={() => this.props.RemoveUsers(f.id)} className={s.button}>Remove</button>
                                    :
                                    <button onClick={() => this.props.AddUsers(f.id)} className={s.button}>Add</button>}

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
}

export default Users