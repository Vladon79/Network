import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../Profile";
import style from "../../../common/FormsControls/FormsControls.module.scss";


interface ProfileDataFormType {
    profile: ProfileType
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = (props) => {
    const {profile} = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <button>Save</button>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <section>
                <b>Full name:</b>{createField("Full name", 'fullName', Input, [], {}, 'text')}
            </section>
            <section>
                <b>looking for a job:</b>{createField("", 'lookingForAJob', Input, [], {}, 'checkbox')}
            </section>
            <section>
                <b>My professional
                    skills:</b>{createField("My professional skills", 'lookingForAJobDescription', Textarea, [], {}, 'text')}
            </section>

            <section>
                <b>About me:</b>{createField("About me", 'aboutMe', Textarea, [], {}, 'text')}
            </section>
            <section>
                <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}:{createField("Full name", "contacts." + key, Input, [], {}, 'text')}</b>
                </div>

            })}
            </section>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm