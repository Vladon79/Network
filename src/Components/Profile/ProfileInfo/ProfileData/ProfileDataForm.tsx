import React from "react";
import {createField, Input, Textarea} from "../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../Profile";
import style from "../../../common/FormsControls/FormsControls.module.scss";
import Button from "../../../common/Button/Button";
import s from './ProfileDataForm.module.scss'


interface ProfileDataFormType {
    profile: ProfileType
}


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, ProfileDataFormType> & ProfileDataFormType> = (props) => {
    const {profile} = props;
    return (
        <form onSubmit={props.handleSubmit} className={s.profileDataForm}>
            <div className={s.profileData}>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <section>
                        <b>Full name:</b>{createField("Full name", 'fullName', Input, [], s.input, 'text')}
                    </section>
                    <section>
                        <b>looking for a job:</b>{createField("", 'lookingForAJob', Input, [], s.input, 'checkbox')}
                    </section>
                    <section>
                        <b>My professional
                            skills:</b>{createField("My professional skills", 'lookingForAJobDescription', Textarea, [], s.textarea, 'text')}
                    </section>

                    <section>
                        <b>About me:</b>{createField("About me", 'aboutMe', Textarea, [], s.textarea, 'text')}
                    </section>

                </div>

                <section>
                    <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}:{createField(key, "contacts." + key, Input, [], s.input, 'text')}</b>
                    </div>

                })}
                </section>

            </div>
            <div className={s.buttonBlock}>
                <Button title={'Save'} className={s.button}/>
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataReduxForm