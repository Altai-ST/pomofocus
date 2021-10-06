import { BACK_SWITCH, SHOW_SETTING, SWITCH } from "../actions"

const initialState ={
    pomodoroState: "pomodoro",
    switchTime: false,
    show: false
}

export const TimeManage =(state = initialState, action)=>{
        switch(action.type){
            case BACK_SWITCH:
                return{
                    ...state,
                    pomodoroState: action.color
                }
            case SWITCH:
                return{
                    ...state,
                    switchTime: action.bool
                }
            case SHOW_SETTING:
                console.log(action.show)
                return{
                    ...state,
                    show: action.show
                }
            default: return state
        }
}