import React from "react";
import { useDispatch } from "react-redux";
import { timerTurn } from "../../store/actions";


const SwitchState=({states})=>{
    const dispatch=useDispatch()
    const handleSwitch=()=>{
        if(states === 'pomodoro'){
            dispatch(timerTurn('short-break'))
        }else if(states ==='short-break'){
            dispatch(timerTurn('long-break'))
        }else{
            dispatch(timerTurn('pomodoro'))
        }
    }
    return(
        <div>
            <button onClick={()=>handleSwitch()}>Click</button>
        </div>
    )
}

export default SwitchState