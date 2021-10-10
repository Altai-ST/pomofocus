import React from "react";
import { Field } from "redux-form";
import BaseSettings, { SetSetting } from "../../containers/Settings";
import { Input } from "./input";
import './modal.scss'

export const ContentSetting=({show, onClose})=>{
    console.log(show)
    return(
        <>
            <SetSetting show={show} onClose={onClose}>
                <div className='headTitle'>
                    <h2>Timer Setting</h2>
                </div>
                <hr />
                <div>
                    <p className='timerText'>Timer (minutes)</p>
                    <div className='firstBlock'>
                        <div>
                            <p>Pomodoro</p>
                            <Field 
                                name='Pomo'
                                component={Input}
                            />
                        </div>
                        <div>
                            <p >Short Break</p>
                            <Field 
                                name='ShortBreak'
                                component={Input}
                            />
                        </div>
                        <div>
                            <p>Long Break</p>
                            <Field
                                name='LongBreak'
                                component={Input}
                            />
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
            </SetSetting>
        </>
    )
}