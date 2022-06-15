import { BACKGRAUND_SWITCH} from "../actions"
import { INTERVAL, SETTING, CHECK } from "../actionType"

const initialState ={
    pomodoroState: "pomodoro",
    timerMinute:{Pomo: 25, ShortBreak: 5, LongBreak: 10, AutoPomo:false, AutoBreak: false, Interval: 1},
    interval:1,
    second: 1,
}

export const TimeManage =(state = initialState, action)=>{
        switch(action.type){
            case BACKGRAUND_SWITCH:
                console.log(action.color)
                return{
                    ...state,
                    pomodoroState: action.color,
                }
            case SETTING:
                console.log(action.payload)
                return{
                    ...state,
                    timerMinute: action.payload
                }
            case CHECK:
                console.log(action.payload)
                return{
                    ...state,
                    second: action.payload
                }
            default: return state
        }
}