import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' />
      </div>
      <div className={s.discriptionInfo}>
        ava+ description
      </div>
    </div>
  )
}
export default ProfileInfo;