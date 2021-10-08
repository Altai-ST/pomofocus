import React from "react";
import styless from './Button.module.scss'

export const ButtonHead = ({title})=>{
        return(
            <button className={styless.btn}>{title}</button>
        )
}