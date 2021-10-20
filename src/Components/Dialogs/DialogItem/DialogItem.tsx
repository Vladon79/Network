import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';
import {dialogsType} from './../../../state/state'


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