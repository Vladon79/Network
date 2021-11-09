import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.PrfileInfo}>
      <div className={s.PrfileInfoImg}>
        <img className={s.ava} src='https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' />
      </div>
      <div className={s.discriptionInfo}>
        Vlad Klopot
      </div>
    </div>
  )
}
export default ProfileInfo;