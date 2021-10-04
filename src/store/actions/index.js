export const TIMER_TURN = 'TIMER_TURN'
export const TIMER_OFF = 'TIMER_OFF'

export const timerTurn =(bool)=>({
     type: TIMER_TURN,
     bool
})