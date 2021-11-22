import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppStoreType } from '../../redux/redux-store';
import { UsersType } from '../../types/types';
import { FriendsImgNavbar } from '../Friends/FriendsNavbar/FriendsIMGNavbar';
import s from './Navbar.module.css';


const Navbar = () => {
  const users = useSelector<AppStoreType, Array<UsersType>>(state => state.usersPage.users)
  const mappedFriends = users.map((a) => (
    <FriendsImgNavbar
      id={a.id}
      key={a.id}
      name={a.name}
      ava={a.ava}
      friends={a.friends}
    />))
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        <div>
          <div className={s.imgFriends}>
            {/* {mappedFriends} */}
          </div>
          <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}> Massages</NavLink>
          </div>
          <div className={s.item} >
            <NavLink to='/news' activeClassName={s.active}> News</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to='/setting' activeClassName={s.active}>Settings</NavLink>
          </div>




        </div>
      </div>
    </nav>
  )
}
export default Navbar;