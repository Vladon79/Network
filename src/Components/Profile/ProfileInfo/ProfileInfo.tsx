import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import ProfileStatus from './ProfileStatus';

type ProfileInfoType = {
  profile:any
  status:string
  updateStatus:(status:string)=>void
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
        <h5 className={s.name}>Vlad Klopot</h5>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}
export default ProfileInfo;