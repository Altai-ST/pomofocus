import React from "react";
import { TIMER_TURN } from "../actions";

const initialState ={
    times = false
}

export const TimeManage =(state = initialState, action)=>{
        switch(action.type){
            case TIMER_TURN:
                return{
                    ...state,
                    times: action.bool,
                }
        }
}