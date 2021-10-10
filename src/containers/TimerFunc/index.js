import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { timerTurn } from "../../store/actions";
import SwitchState from "../SwitchState";

const TimerFunc =({classes, time})=>{
    const backStart = useSelector(state=>state.TimeManage.pomodoroState)
    const setPomo = useSelector(state=>state.TimeManage.mass)
    let count=0;
    if(setPomo != []){
        setPomo.map((el)=>{
            return count=el[0].Pomo
        })
    }
    const dispatch = useDispatch()
    const [minute, setMinute] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    if(!setPomo){
        console.log('hi')
    }

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
        if(count == 0){
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
        }
        
    },[time || count])

    useEffect(()=>{
        if(count > 0){
            console.log(count)
            if(time === 'pomodoro'){
                setMinute(25 * count)
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
        }
    },[count])

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