import React from "react";
import s from './Textarea.module.scss';

type TextareaPropsType = {
    value: string
    onChange:()=>void
    ref:boolean
}


const Textarea = (props: TextareaPropsType) => {
    return (
        <div>
            <textarea  value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default Textarea