import React from 'react'
import styles from './setting.module.scss'
import { useSelector } from 'react-redux'

export const Settings =()=>{
    const showBlock = useSelector(state=>state.show)
    console.log(showBlock)
    if (showBlock === true){
        return(
            <div className={styles.main}>
                <div className={styles.container}>
                    <h1>Timer Settig</h1>
                    <hr />
                    <div>
                        <p>Timer (minutes)</p>
                        <div className={styles.timer}>
                            <div className={styles.block}>Pomodoro</div>
                            <div className={styles.block}>Short Break</div>
                            <div className={styles.block}>Long Break</div>
                        </div>
                        <hr />
                        <div>
                            <div>Auto start Breaks?</div>
                            <div></div>
                        </div>
                        <div>
                            <div>Auto start Pomodoros?</div>
                            <div></div>
                        </div>
                        <div>
                            <div>Long Break interval</div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )}else{
            return showBlock
        }
}