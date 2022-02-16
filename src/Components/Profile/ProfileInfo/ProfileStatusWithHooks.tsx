import React, {ChangeEvent, useEffect, useState} from "react";
import s from './ProfileInfo.module.scss';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

type localStateType = {
    editMode: boolean
    status: string
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [status, setStatus] = useState<string>(props.status)

    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            setStatus(e.currentTarget.value)
        }
    }
    useEffect(() => {
            setStatus(props.status)
    }, [props.status])


    return (
        <div className={s.profileStatus}>
            {!editMode
                ?
                <div className={s.statusText}>
                    <span onDoubleClick={activateEditMode}>{props.status || '__________'}</span>
                </div>
                :
                <div className={s.statusInput}>
                    <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status}/>
                </div>
            }


        </div>
    )
}

export default ProfileStatusWithHooks