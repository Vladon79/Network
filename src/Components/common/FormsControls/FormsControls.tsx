import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react"
import s from './FormsControls.module.scss'
import {required} from "../../../utils/validators/validator";
import {Field} from "redux-form";

const FormControl = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error

    return <div className={`${s.formControl}  ${hasError && s.error}`}>
        <div>
            {props.children}
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} ><textarea {...input}{...restProps} /> </FormControl>
}

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} ><input {...input}{...restProps} /> </FormControl>
}

export const createField = (placeholder: string | null, name: string, component: any, validate: any[], className: any, type: any) => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate}
               className={className} type={type}/>
    </div>
}