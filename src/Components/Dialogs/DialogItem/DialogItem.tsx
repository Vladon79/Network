import React from 'react';
import { NavLink } from 'react-router-dom';
import { dialogsType } from '../../../types/types';
import s from './../Dialogs.module.scss';



const DialogItem = (props: dialogsType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <img src={props.ava}/>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  )
}


export default DialogItem;