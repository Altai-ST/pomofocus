import React from "react";
import styless from './timer.module.scss'
import { ButtonTimer } from "./ButtonTimer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchTimer } from "../../store/actions";


export const Timer =(time,start)=>{
    const backStart = useSelector(state=>state.pomodoroState)
    const switchTimes = useSelector(state=> state.switchTime)
    const dispatch = useDispatch()
    let titleBtn;
    if(!switchTimes){
        titleBtn='START'
    }else{
        titleBtn='STOP'
    }
    return(
        <div className={styless.containerTimer}>
            <div className={styless.pomodoros}>
                <div className={styless.timerBtnGroub}>
                    <ButtonTimer color='pomodoro' title='Pomodoro'/>
                    <ButtonTimer color='short-break' title='Short Break'/>
                    <ButtonTimer color='long-break' title='Long Break'/>
                </div>
                <div className={styless.timer}>25:00</div>
                <button onClick={()=>dispatch(switchTimer(!switchTimes))} className={styless.start}>
                    <span className={styless[backStart]}>{titleBtn}</span> 
                </button>
            </div>
        </div>
    )
} 