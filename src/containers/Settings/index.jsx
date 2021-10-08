import React from 'react'
import styles from './setting.module.scss'

const BaseSettings =({show, isCloses})=>{
    return(
        <>
            <div className={styles.modalContainer}>
                <div className={styles.modalWindow}>
                    <button onClick={isCloses} className={styles.modalCloses}>X</button>
                </div>
            </div>
            
        </>
    )
}

export default BaseSettings