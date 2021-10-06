import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { timerTurn } from "../../../store/actions";
import style from './ButtonTimer.module.scss'
export const ButtonTimer =({color, title})=>{
    const dispatch = useDispatch()
    const backBut = useSelector(state=>state.pomodoroState)
    console.log(color)
    return(
        <button 
        onClick={()=>dispatch(timerTurn(color))} 
        className={style[backBut]}
        >{title}
        </button>
    )
}