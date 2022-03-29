import {ProfileType} from "../../Profile";
import Button from "../../../common/Button/Button";
import React, {ChangeEvent} from "react";
import s from './ProfileData.module.scss'
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
    status: string
    updateStatus: (status: string) => void
}

const ProfileData = ({updateStatus, status, profile, isOwner, goToEditMode}: ProfileDataType) => {
    return (
        <div className={s.profileData}>

            <section className={s.left}>
                <section className={s.fullName}>
                    <b>Name:</b>{profile.fullName}
                </section>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </section>
            <section className={s.right}>
                <section>
                    <b>looking for a job:</b>{profile.lookingForAJob ? "Yes" : 'No'}
                </section>
                {profile.lookingForAJob && <section>
                    <b>My professional skills:</b>{profile.lookingForAJobDescription ? "Yes" : 'No'}
                </section>
                }
                <section>
                    <b>About me:</b>{profile.aboutMe}
                </section>
                <section>
                    <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                    //@ts-ignore
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
                    {isOwner && <Button title={"Edit"} onClick={goToEditMode}></Button>}
                </section>
            </section>
        </div>
    )
}

type ContactType = {
    contactValue: string | null
    contactTitle: string
}

const Contact = ({contactTitle, contactValue}: ContactType) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    )
}

export default ProfileData