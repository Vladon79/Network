import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppStoreType } from '../../redux/redux-store';
import { FriendsType } from '../../types/types';
import { FriendsImgNavbar } from '../Friends/FriendsNavbar/FriendsIMGNavbar';
import s from './RightNavbar.module.css';


const RightNavbar = () => {
    return(
        <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
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
export default RightNavbar;