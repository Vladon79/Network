import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.scss';
import Messages from './Message/Message';
import {dialogsType, messagesType} from '../../types/types';
import {Redirect} from 'react-router-dom';
import Button from '../common/Button/Button';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validator';

type DialogsType = {
    newMessage: string
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
    NewMessageChange: (text: string) => void
    SendMessage: (text: string) => void
    isAuth: boolean
}

const Dialogs = (props: DialogsType) => {

    const messagesElement = props.messages.map(m => <Messages key={m.id} textMesage={m.message}
                                                              myMassege={m.myMessage}/>)
    const dialogsElement = props.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} ava={d.ava}/>)

    const onSubmit = ({newMessage}: DialogsFormPropsType) => {
        console.log(newMessage)
        props.SendMessage(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <div>{messagesElement}</div>

                <div className={s.addMessage}>
                    <DialogReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

export type DialogsFormPropsType = {
    newMessage: string
}

const maxLength200 = maxLengthCreator(200)

const DialogsForm: React.FC<InjectedFormProps<DialogsFormPropsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            {/* e.prevendDefault:сбор всех данных,упаковываются в обьект: контейнерная компонента вызывает onSubmit(formData) */}
            <div>
                <Field placeholder={'New message'} name={'newMessage'} component={Textarea}
                       validate={[required, maxLength200]} className={s.input}/>
            </div>
            <div>
                <button>Send</button>
                {/* <Button title={'Login'} onClick={}/> */}
            </div>
        </form>
    )
}


const DialogReduxForm = reduxForm<DialogsFormPropsType>({form: 'newMessage'})(DialogsForm)