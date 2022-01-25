import React, { ChangeEvent } from "react";
import s from './ProfileInfo.module.scss';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType>  {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value) {
            this.setState({
                status: e.currentTarget.value
            })
        }
    }


    render() {
        return (
            <div className={s.profileStatus}>
                {!this.state.editMode
                    ?
                    <div className={s.statusText}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div className={s.statusInput}>
                        <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }


            </div>
        )
    }


}

export default ProfileStatus