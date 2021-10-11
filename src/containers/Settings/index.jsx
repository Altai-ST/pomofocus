import React from 'react'
import { useDispatch } from 'react-redux'
import { SettingFunc } from '../../store/actions'
import styles from './setting.module.scss'
export const BaseSettings =({show, onClose, children, pomo, long, short, autoPomo, autoBreak})=>{

    const dispatch=useDispatch()
    const handleSubmit=()=>{
        console.log(pomo)
        dispatch(SettingFunc({Pomo: pomo, ShortBreak: short, LongBreak:long, AutoPomo: autoPomo, AutoBreak: autoBreak}))
        onClose(false)
    }

    return(
        <>
            {show &&(
                <div className={styles.modalContainer} onClick={()=>onClose(false)}>
                <div className={styles.modalWindow} onClick={e=>e.stopPropagation()}>
                        <button onClick={()=>onClose(false)} className={styles.modalCloses}>X</button>
                            {children}
                        <button onClick={handleSubmit}>OK</button>
                </div>
            </div>
            )}
        </>
    )
} 
