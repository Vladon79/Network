import React, {ChangeEvent, useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss';
import userPhoto from './../../../assents/image/user.png'
import {ProfileType} from "../Profile";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataReduxForm from "./ProfileData/ProfileDataForm";
import Button from "../../common/Button/Button";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
    saveProfile: (formData: ProfileType) => void
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfileInfoType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const goToEditMode = () => {
        setEditMode(true)
    }

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        //@ts-ignore
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    const onClickNewPhoto = () => {
        // @ts-ignore
        document.getElementById('input-file').click()
    }
    return (
        <div className={s.PrfileInfo}>
            <div className={s.PrfileInfoImg}>
                <img className={s.ava} src={profile.photos.large || userPhoto}/>
                {!!isOwner &&
                    <div className={s.inputFileBlock}>
                        <Button title={'New photo'} className={s.newPhotoButton} onClick={onClickNewPhoto}/>
                        <input id={'input-file'} className={s.inputFile} type={'file'} onChange={onMainPhotoSelected}/>
                    </div>
                }
            </div>

            <div className={s.discriptionInfo}>

                {editMode
                    ? <ProfileDataReduxForm profile={profile} onSubmit={onSubmit} initialValues={profile}/>
                    : <ProfileData status={status} updateStatus={updateStatus}
                                   profile={profile} isOwner={isOwner}
                                   goToEditMode={goToEditMode}/>}

            </div>
        </div>
    )
}


export default ProfileInfo;