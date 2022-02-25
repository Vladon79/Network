import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavlinkForPage.module.scss';

type NavlinkPropsType = {
    link: string
    title: string
}

const NavlinkForPage = ({link, title}: NavlinkPropsType) => {
    return (
        <div className={s.item}>
            <NavLink to={link} activeClassName={s.active}>{title}</NavLink>
        </div>
    )
}
export default NavlinkForPage;