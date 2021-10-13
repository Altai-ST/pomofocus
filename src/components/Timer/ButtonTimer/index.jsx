import React from "react";
import style from './ButtonTimer.module.scss'
export const ButtonTimer =({onClick, title, clasName})=>{
    
        return (
            <button
                onClick={onClick} 
                className={style[clasName]}
            >{title}
            </button>
        )
            
    }
    