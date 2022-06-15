
import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react'
import {BaseSettings} from "../../containers/Settings";
import { useDispatch } from "react-redux";
import {SettingFunc } from "../../store/actions";

import './modal.scss'

export const ContentSetting=({show, onClose})=>{
    const state = useSelector(state=> state.TimeManage.timerMinute)
    const [pomo, setPomo]=useState(0)
    const [short, setShort]=useState(0)
    const [long, setLong]=useState(0)
    const [autoPomo, setAutoPomo]=useState(state.AutoPomo)
    const [autoBreak, setAutoBreak]=useState(state.AutoBreak)
    const [interval, setInterval]=useState(0)
    

    useEffect(()=>{
        setPomo(state.Pomo)
        setShort(state.ShortBreak)
        setLong(state.LongBreak)
        setInterval(state.Interval)
    },[state])
        
    
        const hadleOnChange=(val)=>{
            val.target.value = Number(val.target.value)
            if(val.target.name === 'Pomo'){
                setPomo(val.target.value)
            }else if(val.target.name === 'ShortBreak'){
                setShort(val.target.value)
            }else{
                setLong(val.target.value)
            }
        }
    
        const autoStartPomo=(val)=>{
            setAutoPomo(val)
        }
    
        const autoStartBreak=(val)=>{
            setAutoBreak(val)
        }

        const handleInterval=(num)=>{
            setInterval(num.target.value)
        }

    const dispatch=useDispatch()
    const handleSubmit=()=>{
        dispatch(SettingFunc({Pomo: pomo, ShortBreak: short, LongBreak:long, AutoPomo: autoPomo, AutoBreak: autoBreak, Interval: interval}))
        onClose(false)

    }

    const hadleCheck=(e)=>{
        if(e){
            autoStartPomo(!autoPomo)
        }else{
            console.log('bue')
        }
    }
    const hadleChecked=(eBreak)=>{
        if(eBreak){
            autoStartBreak(!autoBreak)
        }else{
            console.log('bue')
        }
    }
        
    return(
        <>
            <BaseSettings show={show} onClose={onClose}>
                <div className='headTitle'>
                    <h2>Timer Setting</h2>
                </div>
                <hr />
                <div>
                    <p className='timerText'>Timer (minutes)</p>
                    <div className='firstBlock'>
                        <div>
                            <p>Pomodoro</p>
                            <input type="number" name='Pomo' value={pomo} onChange={(e)=>hadleOnChange(e)}/>
                        </div>
                        <div>
                            <p >Short Break</p>
                            <input type="number" name='ShortBreak' value={short} onChange={(e)=>hadleOnChange(e)} />
                        </div>
                        <div>
                            <p>Long Break</p>
                            <input type="number" name='LongBreak' value={long} onChange={(e)=>hadleOnChange(e)} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='secondBlock'>
                    <p>Auto start Breaks?</p>
                    <label  class="switch">
                        <input type="checkbox" onChange={(e)=>hadleChecked(e)}/>
                        <span class="slider round"></span>
                    </label>
                    {/* <button onClick={()=>autoStartBreak(!autoBreak)}></button> */}
                </div>
                <hr />
                <div className='secondBlock'>
                    <p>Auto start Pomodoros?</p>
                    <label  class="switch">
                        <input type="checkbox" onChange={(e)=>hadleCheck(e)}/>
                        <span class="slider round"></span>
                    </label>
                    {/* <button onClick={()=>autoStartPomo(!autoPomo)}>{autoPomo ? 'On' : 'Off'}</button> */}
                </div>
                <hr />
                <div className='secondBlock'>
                    <p>Long Break interval</p>
                    <input value={interval} type="text" onChange={(e)=>handleInterval(e)}/>
                </div>
                <hr />
                <button className='okBlock' onClick={handleSubmit}>Ok</button>
            </BaseSettings>
        </>
    )
}