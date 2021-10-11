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
            setMinute(setTimer.Pomo)
            setSeconds(0)
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
            
        }else if(time === 'short-break'){
            setSeconds(0)
            setMinute(setTimer.ShortBreak)
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
            
        }else{
            setSeconds(0)
            setMinute(setTimer.LongBreak)
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
        }
        
    },[time, setTimer])

    useEffect(()=>{
        if(seconds < 0){
            setSeconds(59)
            setMinute(minute=>minute-1)
        }
        if(minute == 0 & seconds == 0){
            console.log('hi')
            if(backStart === 'pomodoro'){
                dispatch(timerTurn('short-break'))
            }else if(backStart ==='short-break'){
                dispatch(timerTurn('long-break'))
            }else{
                dispatch(timerTurn('pomodoro'))
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