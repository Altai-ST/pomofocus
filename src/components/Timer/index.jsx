import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { timerTurn } from "../../store/actions";

export const Timer =()=>{
    const setTime = useSelector(state => state.times)
    const dispatch = useDispatch()
    console.log(setTime)
    let i = 0
    if(setTime == true){
        setInterval(() => {
            return i++
        }, 1000);
    }else{
        return i
    }
    return(
        <div>
            <p>{i}</p>
            <button onClick={dispatch(timerTurn(setTime == true ? false : true))}></button>
        </div>
    )
} 