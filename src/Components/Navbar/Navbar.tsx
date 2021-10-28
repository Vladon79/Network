import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppStoreType } from '../../redux/redux-store';
import { FriendsType } from '../../types/types';
import { FriendsImgNavbar } from '../Friends/FriendsNavbar/FriendsIMGNavbar';
import s from './Navbar.module.css';


const Navbar = () => {
  const friends = useSelector<AppStoreType,Array<FriendsType>>(state=>state.friendsPage.friends)
  const mappedFriends = friends.map((a) => (
    <FriendsImgNavbar 
        name={a.name}
        ava={a.ava}
    />))
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
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
      <div className={s.item}>
        <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
        <div>
      
         {mappedFriends}
          
        </div>
      </div>
    </nav>
  )
}
export default Navbar;