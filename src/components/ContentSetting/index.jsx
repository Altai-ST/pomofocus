import React from "react";
import { useSelector } from "react-redux";
import {BaseSettings} from "../../containers/Settings";
import './modal.scss'

export const ContentSetting=({show, onClose, hadleOnChange, pomo, short, long})=>{
    return(
        <>
            <BaseSettings show={show} onClose={onClose} pomo={pomo} short={short} long={long}>
                <div className='headTitle'>
                    <h2>Timer Setting</h2>
                </div>
                <hr />
                <div>
                    <p className='timerText'>Timer (minutes)</p>
                    <div className='firstBlock'>
                        <div>
                            <p>Pomodoro</p>
                            <input type="text" name='Pomo' value={pomo} onChange={(e)=>hadleOnChange(e)}/>
                        </div>
                        <div>
                            <p >Short Break</p>
                            <input type="text" name='ShortBreak' value={short} onChange={(e)=>hadleOnChange(e)} />
                        </div>
                        <div>
                            <p>Long Break</p>
                            <input type="text" name='LongBreak' value={long} onChange={(e)=>hadleOnChange(e)} />
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p>Auto start Breaks?</p>
                    <button></button>
                </div>
                <hr />
                <div>
                    <p>Auto start Pomodoros?</p>
                    <button></button>
                </div>
                <hr />
                <div>
                    <p>Long Break interval</p>
                    <input type="text" />
                </div>
                <hr />
            </BaseSettings>
        </>
    )
}