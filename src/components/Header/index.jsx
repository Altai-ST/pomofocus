import React, {useState } from 'react'
import styless from './Header.module.scss'
import {ButtonHead} from './Button/index'
import { ContentSetting } from '../ContentSetting'
export const Header =()=>{

    const [showModal, setShowModal]=useState(false)
    const hadleClick=(value)=>{
        setShowModal(value)
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
            />
        </div>
    )
}