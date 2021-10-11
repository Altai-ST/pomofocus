import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { timerTurn } from "../../store/actions";
import SwitchState from "../SwitchState";

const TimerFunc =({classes, time})=>{
    const backStart = useSelector(state=>state.TimeManage.pomodoroState)
    const setTimer = useSelector(state=>state.TimeManage.timerMinute)

    const dispatch = useDispatch()
    const [minute, setMinute] = useState(setTimer.Pomo);
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    const handleStart =()=>{
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            return;
        }
        const newIntervalId = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        setIntervalId(newIntervalId);
    }

    useEffect(()=>{
        if(time === 'pomodoro'){
            setMinute(setTimer.Pomo>1 ? setTimer.Pomo : 0)
            setSeconds(setTimer.Pomo<1 ? setTimer.Pomo*60 : 0)
            if(setTimer.AutoPomo){
                handleStart()
            }
        }else if(time === 'short-break'){
            setMinute(setTimer.ShortBreak>1 ? setTimer.ShortBreak : 0)
            setSeconds(setTimer.ShortBreak<1 ? setTimer.ShortBreak*60: 0)
            if(setTimer.AutoBreak){
              handleStart()  
            }
        }else{
            setMinute(setTimer.LongBreak>1 ? setTimer.LongBreak : 0)
            setSeconds(setTimer.LongBreak<1 ? setTimer.LongBreak*60 : 0)
            if(setTimer.AutoBreak){
                handleStart()
            }
        }
        
    },[time, setTimer])

    useEffect(()=>{
        if(seconds < 0){
            setSeconds(59)
            setMinute(minute=>minute-1)
        }
        if(minute === 0 & seconds === 0){
            console.log('hi')
            if(backStart === 'pomodoro'){
                dispatch(timerTurn('short-break'))
                handleStart()
            }else if(backStart ==='short-break'){
                dispatch(timerTurn('long-break'))
                handleStart()
            }else{
                dispatch(timerTurn('pomodoro'))
                handleStart()
            }
        }
    },[seconds])

    return(
        <>
            <div className={classes.timer}>{minute}:{seconds < 10 ? '0'+seconds : seconds}</div>
            <button onClick={()=>handleStart()} className={classes.start}>
                <span className={classes[backStart+'Btn']}>{intervalId ? 'STOP' : 'START'}</span> 
            </button>
            {/* <SwitchState states={time}/> */}
        </>
    )
}

export default TimerFunc