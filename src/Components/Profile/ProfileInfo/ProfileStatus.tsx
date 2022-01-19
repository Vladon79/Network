import React from "react";
import s from './ProfileInfo.module.scss';

type ProfileStatusType = {
    status: string

}

class ProfileStatus extends React.Component<ProfileStatusType>  {

    state = {
        editMode: false
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
                        <input autoFocus onBlur={this.deactivateEditMode} value={this.props.status} />
                    </div>
                }


            </div>
        )
    }


}

export default ProfileStatus