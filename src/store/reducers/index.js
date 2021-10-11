import { BACK_SWITCH} from "../actions"
import { SETTING } from "../actionType"

const initialState ={
    pomodoroState: "pomodoro",
    timerMinute:{Pomo: 25, ShortBreak:5, LongBreak:10, AutoPomo:false, AutoBreak: false}
}

export const TimeManage =(state = initialState, action)=>{
        switch(action.type){
            case BACK_SWITCH:
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
            default: return state
        }
}