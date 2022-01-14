import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
  isAuth: boolean
  login: string
}

const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src='https://image.flaticon.com/icons/png/512/3694/3694412.png' />
      <div className={s.loginBlock}>
        { props.isAuth ? props.login :
        <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}
export default Header;