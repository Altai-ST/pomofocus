import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { timerTurn } from "../../../store/actions";
import style from './ButtonTimer.module.scss'
export const ButtonTimer =({color, title, pomodoro})=>{
    const dispatch = useDispatch()
    const setPomodoro = useSelector(state=>state.TimeManage.pomodoroState)
    if(setPomodoro === 'pomodoro' && title ==='Pomodoro'){
        let pomoB = 'pomoB'
        return (
            <button
        onClick={()=>dispatch(timerTurn(color))} 
        className={style[pomoB]}
        >{title}
        </button>
        )
    }else if(setPomodoro === 'short-break' & title ==='Short Break'){
        let shortB = 'shortB'
        return(
            <button
        onClick={()=>dispatch(timerTurn(color))} 
        className={style[shortB]}
        >{title}
        </button>
        )
    }else if(setPomodoro === 'long-break' & title === 'Long Break'){
        let longB = 'longB'
        return(
            <button
        onClick={()=>dispatch(timerTurn(color))} 
        className={style[longB]}
        >{title}
        </button>
        )
    }else{
    return(
        <button
        onClick={()=>dispatch(timerTurn(color))} 
        className={style[pomodoro]}
        >{title}
        </button>
    )
    }
    
}