import React from "react";
import s from './Button.module.scss'

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

const Button = ({ title, onClick, disabled }: ButtonPropsType) => {
    return <button onClick={onClick} className={s.button} disabled={disabled}>{title}</button>
}

export default Button