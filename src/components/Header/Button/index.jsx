import React from "react";
import styless from './Button.module.scss'
import { useDispatch } from 'react-redux'
import { showSettings } from '../../../store/actions'

export const ButtonHead = ({title})=>{
    const dispatch = useDispatch()
    if(title === 'Setting'){
        return(
            <button onClick={()=>dispatch(showSettings(true))} className={styless.btn}>{title}</button>
        )
    }else{
        return(
            <button  className={styless.btn}>{title}</button>
        )
    }
    
}