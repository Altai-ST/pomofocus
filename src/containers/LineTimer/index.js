import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './line.scss'

const LineTimer =()=>{
    const state = useSelector(state=>state.TimeManage.second)
    const stateS = useSelector(state=>state.TimeManage.timerMinute)
    const statePomo = useSelector(state=>state.TimeManage.pomodoroState)
    const[pro, setPro]=useState(0)
    const[reg, setReg]=useState(100)
    let count=0
    if(statePomo === 'pomodoro'){
        count = ((620/(stateS.Pomo*60)*100)/620)
    }else if(statePomo === 'short-break'){
        count = ((620/(stateS.ShortBreak*60)*100)/620)
    }else if(statePomo === 'long-break'){
        count = ((620/(stateS.LongBreak*60)*100)/620)
    }
    
    useEffect(()=>{
        setPro(prevState => prevState + count)
        setReg(prevState => prevState - count)
    },[state])
    useEffect(()=>{
        setPro(0)
        setReg(100)
    },[statePomo])
    return(
        <div className='line' style={{background: 'linear-gradient(to left, #F1F1F145 '+reg+'%,white '+pro+'%)'}}></div>
    )
}

export default LineTimer