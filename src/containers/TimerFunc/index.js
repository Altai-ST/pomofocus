import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

const TimerFunc =({classes, time})=>{
    const backStart = useSelector(state=>state.pomodoroState)
    const [minute, setMinute] = useState(0);
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
            setMinute(25)
            setSeconds(0)
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
            
        }else if(time === 'short-break'){
            setSeconds(0)
            setMinute(5)
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
            
        }else{
            setSeconds(0)
            setMinute(10)
            if (intervalId) {
                clearInterval(intervalId);
                setIntervalId(0);
                return;
            }
        }
    },[time])


    useEffect(()=>{
        if(seconds < 0){
            setSeconds(59)
            setMinute(minute=>minute-1)
        }
    },[seconds])

    return(
        <>
            <div className={classes.timer}>{minute}:{seconds < 10 ? '0'+seconds : seconds}</div>
            <button onClick={()=>handleStart()} className={classes.start}>
                <span className={classes[backStart]}>{intervalId ? 'STOP' : 'START'}</span> 
            </button>
        </>
    )
}

export default TimerFunc