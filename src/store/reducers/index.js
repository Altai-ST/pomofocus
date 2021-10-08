import { BACK_SWITCH} from "../actions"

const initialState ={
    pomodoroState: "pomodoro",
}

export const TimeManage =(state = initialState, action)=>{
        switch(action.type){
            case BACK_SWITCH:
                return{
                    ...state,
                    pomodoroState: action.color,
                }
            default: return state
        }
}