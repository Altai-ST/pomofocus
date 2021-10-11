import React, { useEffect, useState } from 'react'
import styless from './Header.module.scss'
import {ButtonHead} from './Button/index'
import { ContentSetting } from '../ContentSetting'
import { useSelector } from 'react-redux'

export const Header =()=>{

    const [showModal, setShowModal]=useState(false)
    const [pomo, setPomo]=useState(0)
    const [short, setShort]=useState(0)
    const [long, setLong]=useState(0)
    const state = useSelector(state=> state.TimeManage.timerMinute)

    useEffect(()=>{
        setPomo(state.Pomo)
        setShort(state.ShortBreak)
        setLong(state.LongBreak)
    },[state])

    const hadleClick=(value)=>{
        setShowModal(value)
    }

    const hadleOnChange=(val)=>{
        if(val.target.name == 'Pomo'){
            setPomo(val.target.value)
        }else if(val.target.name == 'ShortBreak'){
            setShort(val.target.value)
        }else{
            setLong(val.target.value)
        }
    }

    return(
        <div>
            <nav className={styless.header}>
                <h1>Pomofocus</h1>
                <div>
                    <ButtonHead title='Setting' onClick={hadleClick}/>
                    <ButtonHead title='Report'/>
                </div>
            </nav>
            <ContentSetting 
                show={showModal} 
                onClose={hadleClick} 
                hadleOnChange={hadleOnChange} 
                short={short} 
                pomo={pomo}
                long={long}
            />
        </div>
    )
}