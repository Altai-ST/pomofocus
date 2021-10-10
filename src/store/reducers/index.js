import { BACK_SWITCH} from "../actions"
import { SETTING } from "../actionType"

const initialState ={
    pomodoroState: "pomodoro",
    mass:[]
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
                    mass: [
                        ...state.mass,
                        action.payload.map((el)=>({
                            Pomo:el.Pomo,
                            Short:el.ShortBreak,
                            Long: el.LongBreak,
                        }))
                    ]
                }
            default: return state
        }
}