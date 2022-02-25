import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../redux/redux-store';
import {UserType} from '../../redux/users-reducer';
import s from './Navbar.module.scss';
import NavlinkForPage from "../common/NavlinkForPage/NavlinkForPage";


const Navbar = () => {
    const users = useSelector<AppStoreType, Array<UserType>>(state => state.usersPage.users)
    return (
        <nav className={s.nav}>
            <div className={s.navContainer}>
                <NavlinkForPage link={'/profile'} title={'Profile'}/>
                <NavlinkForPage link={'/users'} title={'Users'}/>
                <NavlinkForPage link={'/dialogs'} title={'Massages'}/>
                <NavlinkForPage link={'/news'} title={'News'}/>
                <NavlinkForPage link={'/music'} title={'Music'}/>
                <NavlinkForPage link={'/setting'} title={'Settings'}/>
            </div>
        </nav>
    )
}
export default Navbar;