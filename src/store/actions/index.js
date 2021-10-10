import { SETTING } from "../actionType"

export const BACK_SWITCH = 'BACK_SWITCH'

export const timerTurn =(color)=>{
     return{
          type: BACK_SWITCH,
          color,
     }
}

export const SettingFunc=(all)=>({
     type: SETTING,
     payload:all
})

