export const BACK_SWITCH = 'BACK_SWITCH'
export const SWITCH = 'SWITCH'
export const SHOW_SETTING = 'SHOW_SETTING'

export const timerTurn =(color)=>{
     return{
          type: BACK_SWITCH,
          color 
     }
}

export const showSettings = (show)=>({
     type: SHOW_SETTING,
     show
})

export const switchTimer =(bool)=>({
     type: SWITCH,
     bool
})