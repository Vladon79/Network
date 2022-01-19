import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppStoreType } from '../../redux/redux-store';
import { UserType } from '../../redux/users-reducer';
import s from './Navbar.module.scss';


const Navbar = () => {
  const users = useSelector<AppStoreType, Array<UserType>>(state => state.usersPage.users)
  return (
    <nav className={s.nav}>
      <div className={s.navContainer}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
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
    </nav >
  )
}
export default Navbar;