import { CHECK, INTERVAL, SETTING } from "../actionType"

export const BACKGRAUND_SWITCH = 'BACKGRAUND_SWITCH'
export const timerTurn =(color)=>{
     return{
          type: BACKGRAUND_SWITCH,
          color,
     }
}

export const SettingFunc=(all)=>({
     type: SETTING,
     payload:all
})

export const Checking=(sec)=>({
     type: CHECK,
     payload: sec,
})

