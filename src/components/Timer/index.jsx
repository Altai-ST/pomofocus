import React from "react";
import styless from './timer.module.scss'
import { ButtonTimer } from "./ButtonTimer";

import TimerFunc from "../../containers/TimerFunc";
import { useSelector } from "react-redux";

export const Timer =()=>{
    const pomoState = useSelector(state => state.TimeManage.pomodoroState)
    return(
        <div className={styless.containerTimer}>
            <div className={styless.pomodoros}>
                <div className={styless.timerBtnGroub}>
                    <ButtonTimer color='pomodoro' pomodoro='pomoBtn' title='Pomodoro'/>
                    <ButtonTimer color='short-break' pomodoro='short' title='Short Break'/>
                    <ButtonTimer color='long-break' pomodoro='long' title='Long Break'/>
                </div>
                <TimerFunc classes={styless} time={pomoState}/>
            </div>
        </div>
    )
} 