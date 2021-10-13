import React, { useEffect, useState } from "react";
import styless from './timer.module.scss'
import { ButtonTimer } from "./ButtonTimer";

import TimerFunc from "../../containers/TimerFunc";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { timerTurn } from "../../store/actions";

export const Timer =()=>{
    const pomoState = useSelector(state => state.TimeManage.pomodoroState)
    const dispatch = useDispatch()
    const [active, setActive]=useState()
    const [unactive, setUnactive]=useState()

    useEffect(()=>{
        setUnactive('pomoBtn')
        if(pomoState === 'pomodoro'){
            setActive('pomoB')
        }else if(pomoState === 'short-break'){
            setActive('shortB')
        }else{
            setActive('longB')
        }
    },[pomoState])
    

    const changePomodoroState = (color) =>{
        dispatch(timerTurn(color))
    }

    return(
        <div className={styless.containerTimer}>
            <div className={styless.pomodoros}>
                <div className={styless.timerBtnGroub}>'
                    <ButtonTimer clasName={pomoState === 'pomodoro' ? active : unactive}  
                    title='Pomodoro' color='pomodoro' onClick={()=>changePomodoroState('pomodoro')}/>
                    <ButtonTimer clasName={pomoState === 'short-break' ? active : unactive} 
                    title='Short Break' color='short-break' onClick={()=>changePomodoroState('short-break')}/>
                    <ButtonTimer clasName={pomoState === 'long-break' ? active : unactive} 
                    title='Long Break' color='long-break' onClick={() => changePomodoroState('long-break')}/>
                </div>
                <TimerFunc classes={styless} time={pomoState}/>
            </div>
        </div>
    )
} 