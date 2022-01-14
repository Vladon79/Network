import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

type ProfileInfoType = {
  profile:any
}

const ProfileInfo = (props:ProfileInfoType) => {

  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div className={s.PrfileInfo}>
      <div className={s.PrfileInfoImg}>
        <img className={s.ava} src={props.profile.photos.large} />
      </div>
      <div className={s.discriptionInfo}>
        Vlad Klopot
      </div>
    </div>
  )
}
export default ProfileInfo;