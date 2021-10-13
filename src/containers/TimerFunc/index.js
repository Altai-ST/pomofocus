import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checking, timerTurn } from "../../store/actions";

let count = 0
const TimerFunc =({classes})=>{
    const pomodoroState = useSelector(state=>state.TimeManage.pomodoroState)
    const setTimer = useSelector(state=>state.TimeManage.timerMinute)
    const dispatch = useDispatch()
    const [minute, setMinute] = useState(setTimer.Pomo);
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const clearTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
            return;
        }
    }
    const handleStart = ()=>{
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
            return;
        }
        const newIntervalId = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        setIntervalId(newIntervalId);
    }

    useEffect(()=>{
        if(pomodoroState === 'pomodoro'){
            setMinute(setTimer.Pomo)
            setSeconds(0)
            if(setTimer.AutoPomo){ //00:01
                handleStart()
            }
        }else if(pomodoroState === 'short-break'){
            setMinute(setTimer.ShortBreak)
            setSeconds(0)
            if(setTimer.AutoBreak){
              handleStart()  
            }
        }else{
            setMinute(setTimer.LongBreak)
            setSeconds(0)
            if(setTimer.AutoBreak){
                handleStart()
            }
        }
        
    },[pomodoroState, setTimer])

    const onNext=()=>{
        setMinute(0)
        setSeconds(0)
    }
    useEffect(()=>{
        dispatch(Checking(seconds))
        if(seconds < 0){
            setSeconds(59)
            setMinute(minute=>minute-1)
        }
        if(minute === 0 & seconds === 0){
            clearTimer()
            if(pomodoroState === 'pomodoro'){
                count++
                dispatch(timerTurn('short-break'))
            }else if(pomodoroState === 'short-break' && count === Number(setTimer.Interval)){
                count=0
                dispatch(timerTurn('long-break'))
            }else if(pomodoroState === 'short-break' && count !== Number(setTimer.Interval)){
                dispatch(timerTurn('pomodoro'))
            }else if(pomodoroState === 'long-break'){
                dispatch(timerTurn('pomodoro'))
            }
        }
    },[seconds, minute])

    return(
        <>
            <div className={classes.timer}>{minute}:{seconds < 10 ? '0'+seconds : seconds}</div>
            
            <div className={classes.timerBtn}>
                <button onClick={()=>handleStart()} className={intervalId ? classes.stop : classes.start}>
                    <span className={classes[pomodoroState+'Btn']}>{intervalId ? 'STOP' : 'START'}</span> 
                </button>
                { intervalId && <button onClick={onNext} className={classes.next}>Next</button>}
            </div>
            
        </>
    )
}

export default TimerFunc