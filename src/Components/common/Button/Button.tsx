import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from './Button.module.scss'
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type ButtonPropsType = DefaultButtonPropsType & {
    title: string
    onClick: () => void
    // disabled?: boolean

}

const Button = ({ title, onClick, ...props }: ButtonPropsType) => {
    const finalClassName = `${s.button} ${props.className}`
    return <button onClick={onClick} className={finalClassName} disabled={props.disabled}>{title}</button>
}

export default Button