import React from 'react';
import { NavLink } from 'react-router-dom';
import { dialogsType } from '../../../types/types';
import s from './../Dialogs.module.css';



const DialogItem = (props: dialogsType) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}>
      <hr />
      <img src={props.ava}/>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
     <hr />
    
    </div>
  )
}


export default DialogItem;