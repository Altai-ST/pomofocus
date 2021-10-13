import React from 'react'
import styles from './setting.module.scss'
export const BaseSettings =({show, onClose, children})=>{
    return(
        <>
            {show &&(
                <div className={styles.modalContainer} onClick={()=>onClose(false)}>
                <div className={styles.modalWindow} onClick={e=>e.stopPropagation()}>
                        <button onClick={()=>onClose(false)} className={styles.modalCloses}>X</button>
                            {children}
                </div>
            </div>
            )}
        </>
    )
} 
