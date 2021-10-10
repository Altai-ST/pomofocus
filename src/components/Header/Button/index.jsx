import React from "react";
import styless from './Button.module.scss'

export const ButtonHead = ({title, onClick})=>{
        return(
            <button onClick={()=>onClick(true)} className={styless.btn}>{title}</button>
        )
}