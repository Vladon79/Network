import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.scss';
import logo from '../../assents/image/logo.svg'

type HeaderPropsType = {
    isAuth: boolean
    login: string
    logoutMe: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src={logo}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}-
                        <button onClick={props.logoutMe}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header;